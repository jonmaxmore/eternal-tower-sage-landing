import Sidebar from '@/components/admin/Sidebar'
import Header from '@/components/admin/Header'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F4F7FE] font-sans text-slate-900">
      {/* Sidebar (Fixed) */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col ml-64 h-full transition-all duration-300">

        {/* Header (Sticky) */}
        <Header />

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
