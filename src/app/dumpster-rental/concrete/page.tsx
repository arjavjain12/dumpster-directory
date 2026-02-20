import type { Metadata } from 'next'
import { CATEGORY_DATA } from '@/lib/category-data'
import CategoryPageLayout from '@/components/CategoryPageLayout'

const data = CATEGORY_DATA['concrete']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: '/dumpster-rental/concrete' },
  openGraph: { title: data.metaTitle, description: data.metaDescription },
}

export default function Page() {
  return <CategoryPageLayout data={data} />
}
