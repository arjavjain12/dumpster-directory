import { verifyAdmin, loginAction, logoutAction } from './actions'

export const metadata = { title: 'Admin — DumpsterListing', robots: 'noindex, nofollow' }

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const isAdmin = await verifyAdmin()

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <form action={loginAction} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 w-full max-w-sm">
          <h1 className="text-xl font-bold text-gray-900 mb-6">Admin Login</h1>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent mb-4"
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-green-800 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-14">
          <div className="flex items-center gap-6">
            <a href="/admin" className="font-bold text-gray-900">DumpsterListing Admin</a>
            <a href="/admin/new" className="text-sm text-green-700 hover:text-green-800 font-medium">+ Add Business</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm text-gray-500 hover:text-gray-700">View Site</a>
            <form action={logoutAction}>
              <button type="submit" className="text-sm text-gray-500 hover:text-gray-700">Logout</button>
            </form>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}
