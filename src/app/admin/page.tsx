import Link from 'next/link'
import { getAdminClient } from '@/lib/supabase-admin'
import { toggleBusinessActive, deleteBusiness } from './actions'

export const dynamic = 'force-dynamic'

async function getBusinesses(search?: string, page = 1) {
  const db = getAdminClient()
  const perPage = 50
  const offset = (page - 1) * perPage

  let query = db
    .from('businesses')
    .select('*, city:cities(city_name, state, state_slug, city_slug)', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + perPage - 1)

  if (search) {
    query = query.ilike('name', `%${search}%`)
  }

  const { data, count } = await query
  return { businesses: data || [], total: count || 0 }
}

async function getStats() {
  const db = getAdminClient()
  const { count: total } = await db.from('businesses').select('id', { count: 'exact', head: true })
  const { count: active } = await db.from('businesses').select('id', { count: 'exact', head: true }).eq('is_active', true)
  const { count: inactive } = await db.from('businesses').select('id', { count: 'exact', head: true }).eq('is_active', false)
  return { total: total || 0, active: active || 0, inactive: inactive || 0 }
}

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; page?: string }>
}) {
  const params = await searchParams
  const search = params.search || ''
  const page = parseInt(params.page || '1')
  const [{ businesses, total }, stats] = await Promise.all([
    getBusinesses(search, page),
    getStats(),
  ])
  const totalPages = Math.ceil(total / 50)

  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Total Businesses', value: stats.total },
          { label: 'Active (Published)', value: stats.active },
          { label: 'Inactive (Draft)', value: stats.inactive },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="text-2xl font-bold text-gray-900">{s.value.toLocaleString()}</div>
            <div className="text-sm text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search + Actions */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <form className="flex-1 max-w-md">
          <input
            type="search"
            name="search"
            defaultValue={search}
            placeholder="Search businesses..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </form>
        <Link
          href="/admin/new"
          className="bg-green-700 text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-green-800 transition"
        >
          + Add Business
        </Link>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Business</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">City</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Phone</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Rating</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Tier</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Status</th>
                <th className="text-right px-4 py-3 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {businesses.map((biz: any) => (
                <tr key={biz.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="font-medium text-gray-900">{biz.name}</div>
                    {biz.website && (
                      <a href={biz.website} target="_blank" rel="noopener" className="text-xs text-green-600 hover:underline">
                        {new URL(biz.website).hostname}
                      </a>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {biz.city ? (
                      <a
                        href={`/dumpster-rental/${biz.city.state_slug}/${biz.city.city_slug}`}
                        target="_blank"
                        className="hover:text-green-700"
                      >
                        {biz.city.city_name}, {biz.city.state}
                      </a>
                    ) : (
                      <span className="text-gray-400">Unknown</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{biz.phone || '—'}</td>
                  <td className="px-4 py-3 text-gray-600">
                    {biz.rating ? `${biz.rating}★ (${biz.review_count})` : '—'}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                      biz.tier === 'premium' ? 'bg-yellow-100 text-yellow-800' :
                      biz.tier === 'basic' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {biz.tier}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <form action={async () => {
                      'use server'
                      await toggleBusinessActive(biz.id, !biz.is_active)
                    }}>
                      <button
                        type="submit"
                        className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium cursor-pointer ${
                          biz.is_active
                            ? 'bg-green-100 text-green-800 hover:bg-green-200'
                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                        }`}
                      >
                        {biz.is_active ? 'Published' : 'Draft'}
                      </button>
                    </form>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/${biz.id}/edit`}
                        className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Edit
                      </Link>
                      <form action={async () => {
                        'use server'
                        await deleteBusiness(biz.id)
                      }}>
                        <button type="submit" className="text-xs text-red-500 hover:text-red-700 font-medium">
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {businesses.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            {search ? `No businesses matching "${search}"` : 'No businesses yet.'}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: Math.min(totalPages, 10) }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={`/admin?page=${p}${search ? `&search=${search}` : ''}`}
              className={`px-3 py-1 rounded-lg text-sm ${
                p === page ? 'bg-green-700 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {p}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
