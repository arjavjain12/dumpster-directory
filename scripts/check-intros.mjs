import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const envVars = Object.fromEntries(
  fs.readFileSync(path.join(__dirname, '..', '.env.local'), 'utf8')
    .split('\n').filter(l => l.includes('=') && !l.startsWith('#'))
    .map(l => { const idx = l.indexOf('='); return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()] })
)

const sb = createClient(envVars['NEXT_PUBLIC_SUPABASE_URL'], envVars['SUPABASE_SERVICE_ROLE_KEY'])
const { count: withIntro } = await sb.from('cities').select('*', { count: 'exact', head: true }).not('intro', 'is', null)
const { count: total } = await sb.from('cities').select('*', { count: 'exact', head: true })
console.log(`${withIntro} / ${total} (${Math.round(withIntro / total * 100)}%) — Remaining: ${total - withIntro}`)
