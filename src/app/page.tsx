import HeroSection from '@/components/HeroSection'
import Milestones from '@/components/Milestones'
import Footer from '@/components/Footer'
import prisma from '@/lib/prisma'

async function getSiteConfig() {
  if (!process.env.DATABASE_URL) return null
  try {
    return await prisma.siteConfig.findFirst()
  } catch (_) {
    return null
  }
}

export default async function Home() {
  const config = await getSiteConfig()

  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection heroBgUrl={config?.heroBgUrl} />

      {/* Content Wrapper for seamless dark background */}
      <div className="relative bg-slate-950">
        <Milestones />
      </div>

      <Footer />
    </main>
  )
}
