import HeroSection from '@/components/HeroSection'
import Milestones from '@/components/Milestones'
import prisma from '@/lib/prisma'

async function getSiteConfig() {
  if (!process.env.DATABASE_URL) return null
  try {
    return await prisma.siteConfig.findFirst()
  } catch (e) {
    return null
  }
}

export default async function Home() {
  const config = await getSiteConfig()

  return (
    <main className="min-h-screen flex flex-col bg-slate-950">
      <HeroSection heroBgUrl={config?.heroBgUrl} />
      <Milestones />

      {/* Footer */}
      <footer className="bg-slate-950 py-12 text-center text-slate-500 text-sm border-t border-slate-900 relative z-10">
        <div className="container mx-auto px-4">
          <p className="mb-4">© 2024 Eternal Tower Saga. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
