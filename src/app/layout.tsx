import type { Metadata } from 'next'
import { Inter, Cinzel } from 'next/font/google'
import './globals.css'
import prisma from '@/lib/prisma'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })

async function getSiteConfig() {
  if (!process.env.DATABASE_URL) return null
  try {
    return await prisma.siteConfig.findFirst()
  } catch (_) {
    return null
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig()
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    title: config?.metaTitle || 'Eternal Tower Saga - Pre-register Now',
    description: config?.metaDescription || 'Join the anime MMORPG adventure. Pre-register today for exclusive rewards!',
    openGraph: {
      title: config?.metaTitle || 'Eternal Tower Saga',
      description: config?.metaDescription || 'Join the anime MMORPG adventure.',
      images: ['/images/p1-bg.webp'],
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const config = await getSiteConfig()
  const themeColor = config?.themeColor || '#2563eb'

  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <head>
        <style>{`:root { --primary: ${themeColor}; }`}</style>
      </head>
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
