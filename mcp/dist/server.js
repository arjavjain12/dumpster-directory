#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema, } from '@modelcontextprotocol/sdk/types.js';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
// Load .env.local from the project root
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });
function getClient() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) {
        throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local');
    }
    return createClient(url, key);
}
function slugify(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
// ─── Server setup ─────────────────────────────────────────────────────────────
const server = new Server({ name: 'dumpster-directory-cms', version: '1.0.0' }, { capabilities: { tools: {} } });
// ─── Tool definitions ─────────────────────────────────────────────────────────
server.setRequestHandler(ListToolsRequestSchema, async () => ({
    tools: [
        // ── Cities ────────────────────────────────────────────────────────────────
        {
            name: 'get_all_cities',
            description: 'Get all cities in the database, optionally filtered by state slug. Returns city name, state, slugs, population, lat/lng.',
            inputSchema: {
                type: 'object',
                properties: {
                    state_slug: { type: 'string', description: 'Filter by state slug e.g. "rhode-island"' },
                    limit: { type: 'number', description: 'Max results (default 100)' },
                    offset: { type: 'number', description: 'Pagination offset (default 0)' },
                },
            },
        },
        {
            name: 'get_cities_without_businesses',
            description: 'Get cities that have zero active business listings — best targets for adding new listings to unlock city pages.',
            inputSchema: {
                type: 'object',
                properties: {
                    state_slug: { type: 'string', description: 'Filter by state slug e.g. "rhode-island"' },
                    limit: { type: 'number', description: 'Max results (default 50)' },
                },
            },
        },
        {
            name: 'get_cities_with_low_business_count',
            description: 'Get cities with fewer than N active listings, sorted by population. Use to find underserved markets.',
            inputSchema: {
                type: 'object',
                properties: {
                    max_count: { type: 'number', description: 'Return cities with fewer businesses than this (default 3)' },
                    state_slug: { type: 'string', description: 'Filter by state slug' },
                    limit: { type: 'number', description: 'Max results (default 50)' },
                },
            },
        },
        {
            name: 'get_city',
            description: 'Get a single city record by state and city slug.',
            inputSchema: {
                type: 'object',
                properties: {
                    state_slug: { type: 'string', description: 'e.g. "rhode-island"' },
                    city_slug: { type: 'string', description: 'e.g. "providence"' },
                },
                required: ['state_slug', 'city_slug'],
            },
        },
        {
            name: 'search_cities',
            description: 'Search cities by name prefix. Returns id, city_name, state, slugs, population.',
            inputSchema: {
                type: 'object',
                properties: {
                    query: { type: 'string', description: 'City name prefix to search' },
                    limit: { type: 'number', description: 'Max results (default 20)' },
                },
                required: ['query'],
            },
        },
        // ── Businesses ────────────────────────────────────────────────────────────
        {
            name: 'get_businesses',
            description: 'Get all business listings for a city, ordered by tier then rating.',
            inputSchema: {
                type: 'object',
                properties: {
                    city_id: { type: 'number', description: 'City ID (get from get_city or search_cities)' },
                    include_inactive: { type: 'boolean', description: 'Include inactive listings (default false)' },
                },
                required: ['city_id'],
            },
        },
        {
            name: 'create_business',
            description: 'Create a new business listing on a city page. Slug is auto-generated from the business name.',
            inputSchema: {
                type: 'object',
                properties: {
                    city_id: { type: 'number', description: 'City ID to associate the business with' },
                    name: { type: 'string', description: 'Business name' },
                    address: { type: 'string', description: 'Full street address' },
                    phone: { type: 'string', description: 'Phone number' },
                    website: { type: 'string', description: 'Website URL' },
                    email: { type: 'string', description: 'Contact email' },
                    rating: { type: 'number', description: 'Star rating 1.0–5.0' },
                    review_count: { type: 'number', description: 'Number of reviews' },
                    tier: { type: 'string', enum: ['free', 'basic', 'premium'], description: 'Listing tier (default free)' },
                    is_active: { type: 'boolean', description: 'Whether to publish immediately (default true)' },
                    sizes_available: {
                        type: 'array',
                        items: { type: 'string' },
                        description: 'Dumpster sizes offered e.g. ["10", "20", "30", "40"]',
                    },
                    service_area_miles: { type: 'number', description: 'Service radius in miles (default 25)' },
                    description: { type: 'string', description: 'Business description shown on listing page' },
                    google_place_id: { type: 'string', description: 'Google Maps Place ID for review sync' },
                },
                required: ['city_id', 'name'],
            },
        },
        {
            name: 'update_business',
            description: 'Update fields on an existing business listing. Only provided fields are changed.',
            inputSchema: {
                type: 'object',
                properties: {
                    id: { type: 'number', description: 'Business ID' },
                    name: { type: 'string' },
                    address: { type: 'string' },
                    phone: { type: 'string' },
                    website: { type: 'string' },
                    email: { type: 'string' },
                    rating: { type: 'number' },
                    review_count: { type: 'number' },
                    tier: { type: 'string', enum: ['free', 'basic', 'premium'] },
                    is_active: { type: 'boolean' },
                    sizes_available: { type: 'array', items: { type: 'string' } },
                    service_area_miles: { type: 'number' },
                    description: { type: 'string' },
                    google_place_id: { type: 'string' },
                },
                required: ['id'],
            },
        },
        {
            name: 'toggle_business_active',
            description: 'Activate or deactivate a business listing without changing other fields.',
            inputSchema: {
                type: 'object',
                properties: {
                    id: { type: 'number', description: 'Business ID' },
                    is_active: { type: 'boolean', description: 'true to publish, false to hide' },
                },
                required: ['id', 'is_active'],
            },
        },
        {
            name: 'delete_business',
            description: 'Permanently delete a business listing. Cannot be undone.',
            inputSchema: {
                type: 'object',
                properties: {
                    id: { type: 'number', description: 'Business ID' },
                },
                required: ['id'],
            },
        },
        // ── Pricing ───────────────────────────────────────────────────────────────
        {
            name: 'get_city_pricing',
            description: 'Get pricing data for a city — min/max price per dumpster size in yards.',
            inputSchema: {
                type: 'object',
                properties: {
                    city_id: { type: 'number', description: 'City ID' },
                },
                required: ['city_id'],
            },
        },
        {
            name: 'upsert_pricing',
            description: 'Add or update the pricing row for a specific dumpster size in a city. Inserts if not exists, updates if it does.',
            inputSchema: {
                type: 'object',
                properties: {
                    city_id: { type: 'number', description: 'City ID' },
                    size_yards: { type: 'number', description: 'Dumpster size in cubic yards e.g. 10, 20, 30, 40' },
                    price_low: { type: 'number', description: 'Minimum rental price in USD' },
                    price_high: { type: 'number', description: 'Maximum rental price in USD' },
                    rental_days_included: { type: 'number', description: 'Days included in base price (default 7)' },
                },
                required: ['city_id', 'size_yards', 'price_low', 'price_high'],
            },
        },
        // ── Leads ─────────────────────────────────────────────────────────────────
        {
            name: 'get_leads',
            description: 'Get lead form submissions from the site. Useful for spotting high-demand cities.',
            inputSchema: {
                type: 'object',
                properties: {
                    status: {
                        type: 'string',
                        enum: ['new', 'contacted', 'converted', 'lost'],
                        description: 'Filter by lead status',
                    },
                    limit: { type: 'number', description: 'Max results (default 50)' },
                },
            },
        },
        {
            name: 'get_lead_cities_summary',
            description: 'Summarize which cities are generating the most lead form submissions — shows real demand signals for where to add listings.',
            inputSchema: {
                type: 'object',
                properties: {},
            },
        },
    ],
}));
// ─── Tool implementations ─────────────────────────────────────────────────────
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const db = getClient();
    const { name, arguments: args = {} } = request.params;
    try {
        switch (name) {
            // ── Cities ──────────────────────────────────────────────────────────────
            case 'get_all_cities': {
                const limit = args.limit ?? 100;
                const offset = args.offset ?? 0;
                let query = db
                    .from('cities')
                    .select('*')
                    .order('population', { ascending: false })
                    .range(offset, offset + limit - 1);
                if (args.state_slug)
                    query = query.eq('state_slug', args.state_slug);
                const { data, error } = await query;
                if (error)
                    throw error;
                return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
            }
            case 'get_cities_without_businesses': {
                const { data: activeCityRows } = await db
                    .from('businesses')
                    .select('city_id')
                    .eq('is_active', true);
                const idsWithBusinesses = [...new Set((activeCityRows || []).map((r) => r.city_id))];
                let query = db
                    .from('cities')
                    .select('*')
                    .order('population', { ascending: false })
                    .limit(args.limit ?? 50);
                if (args.state_slug)
                    query = query.eq('state_slug', args.state_slug);
                if (idsWithBusinesses.length > 0) {
                    query = query.not('id', 'in', `(${idsWithBusinesses.join(',')})`);
                }
                const { data, error } = await query;
                if (error)
                    throw error;
                return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
            }
            case 'get_cities_with_low_business_count': {
                const maxCount = args.max_count ?? 3;
                const { data: counts } = await db
                    .from('businesses')
                    .select('city_id')
                    .eq('is_active', true);
                const countMap = {};
                for (const row of (counts || [])) {
                    countMap[row.city_id] = (countMap[row.city_id] || 0) + 1;
                }
                const lowCityIds = Object.entries(countMap)
                    .filter(([, count]) => count < maxCount)
                    .map(([id]) => parseInt(id));
                if (lowCityIds.length === 0) {
                    return { content: [{ type: 'text', text: '[]' }] };
                }
                let query = db
                    .from('cities')
                    .select('*')
                    .in('id', lowCityIds)
                    .order('population', { ascending: false })
                    .limit(args.limit ?? 50);
                if (args.state_slug)
                    query = query.eq('state_slug', args.state_slug);
                const { data, error } = await query;
                if (error)
                    throw error;
                const result = (data || []).map((city) => ({
                    ...city,
                    business_count: countMap[city.id] || 0,
                }));
                return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
            }
            case 'get_city': {
                const { data, error } = await db
                    .from('cities')
                    .select('*')
                    .eq('state_slug', args.state_slug)
                    .eq('city_slug', args.city_slug)
                    .single();
                if (error)
                    throw error;
                return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
            }
            case 'search_cities': {
                const { data, error } = await db
                    .from('cities')
                    .select('id, city_name, state, state_slug, city_slug, population')
                    .ilike('city_name', `${args.query}%`)
                    .order('population', { ascending: false })
                    .limit(args.limit ?? 20);
                if (error)
                    throw error;
                return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
            }
            // ── Businesses ──────────────────────────────────────────────────────────
            case 'get_businesses': {
                let query = db
                    .from('businesses')
                    .select('*')
                    .eq('city_id', args.city_id)
                    .order('tier', { ascending: false })
                    .order('rating', { ascending: false });
                if (!args.include_inactive)
                    query = query.eq('is_active', true);
                const { data, error } = await query;
                if (error)
                    throw error;
                return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
            }
            case 'create_business': {
                const { city_id, name, ...rest } = args;
                const slug = slugify(name);
                const { data, error } = await db
                    .from('businesses')
                    .insert({
                    city_id,
                    name,
                    slug,
                    tier: rest.tier ?? 'free',
                    is_active: rest.is_active ?? true,
                    service_area_miles: rest.service_area_miles ?? 25,
                    review_count: rest.review_count ?? 0,
                    sizes_available: rest.sizes_available ?? [],
                    photos: [],
                    address: rest.address ?? null,
                    phone: rest.phone ?? null,
                    website: rest.website ?? null,
                    email: rest.email ?? null,
                    rating: rest.rating ?? null,
                    description: rest.description ?? null,
                    google_place_id: rest.google_place_id ?? null,
                })
                    .select()
                    .single();
                if (error)
                    throw error;
                return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
            }
            case 'update_business': {
                const { id, ...fields } = args;
                if (fields.name)
                    fields.slug = slugify(fields.name);
                fields.updated_at = new Date().toISOString();
                const { data, error } = await db
                    .from('businesses')
                    .update(fields)
                    .eq('id', id)
                    .select()
                    .single();
                if (error)
                    throw error;
                return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
            }
            case 'toggle_business_active': {
                const { data, error } = await db
                    .from('businesses')
                    .update({ is_active: args.is_active, updated_at: new Date().toISOString() })
                    .eq('id', args.id)
                    .select()
                    .single();
                if (error)
                    throw error;
                return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
            }
            case 'delete_business': {
                const { error } = await db.from('businesses').delete().eq('id', args.id);
                if (error)
                    throw error;
                return { content: [{ type: 'text', text: `Business ${args.id} permanently deleted.` }] };
            }
            // ── Pricing ─────────────────────────────────────────────────────────────
            case 'get_city_pricing': {
                const { data, error } = await db
                    .from('city_pricing')
                    .select('*')
                    .eq('city_id', args.city_id)
                    .order('size_yards');
                if (error)
                    throw error;
                return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
            }
            case 'upsert_pricing': {
                const { data, error } = await db
                    .from('city_pricing')
                    .upsert({
                    city_id: args.city_id,
                    size_yards: args.size_yards,
                    price_low: args.price_low,
                    price_high: args.price_high,
                    rental_days_included: args.rental_days_included ?? 7,
                }, { onConflict: 'city_id,size_yards' })
                    .select()
                    .single();
                if (error)
                    throw error;
                return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
            }
            // ── Leads ────────────────────────────────────────────────────────────────
            case 'get_leads': {
                let query = db
                    .from('leads')
                    .select('*, city:cities(city_name, state, state_slug, city_slug)')
                    .order('created_at', { ascending: false })
                    .limit(args.limit ?? 50);
                if (args.status)
                    query = query.eq('status', args.status);
                const { data, error } = await query;
                if (error)
                    throw error;
                return { content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] };
            }
            case 'get_lead_cities_summary': {
                const { data, error } = await db
                    .from('leads')
                    .select('city_id, city:cities(city_name, state, state_slug, city_slug)');
                if (error)
                    throw error;
                const summary = {};
                for (const lead of (data || [])) {
                    const key = String(lead.city_id);
                    if (!summary[key])
                        summary[key] = { city: lead.city, count: 0 };
                    summary[key].count++;
                }
                const sorted = Object.values(summary).sort((a, b) => b.count - a.count);
                return { content: [{ type: 'text', text: JSON.stringify(sorted, null, 2) }] };
            }
            default:
                throw new Error(`Unknown tool: ${name}`);
        }
    }
    catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return {
            content: [{ type: 'text', text: `Error: ${message}` }],
            isError: true,
        };
    }
});
// ─── Start ────────────────────────────────────────────────────────────────────
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('Dumpster Directory CMS MCP server running on stdio');
}
main().catch((err) => {
    console.error('Fatal:', err);
    process.exit(1);
});
