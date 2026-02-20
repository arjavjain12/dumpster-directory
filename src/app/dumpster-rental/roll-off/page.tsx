import type { Metadata } from 'next'
import { CATEGORY_DATA } from '@/lib/category-data'
import CategoryPageLayout from '@/components/CategoryPageLayout'

const data = CATEGORY_DATA['roll-off']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/dumpster-rental/roll-off' },
  openGraph: { title: data.metaTitle, description: data.metaDescription },
}

export default function Page() {
  return <CategoryPageLayout data={data} />
}
