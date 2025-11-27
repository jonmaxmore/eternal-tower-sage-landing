import type { Metadata } from 'next'
import { Inter, Cinzel } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })

export const metadata: Metadata = {
  title: 'Eternal Tower Saga - Pre-register Now',
  description: 'Join the anime MMORPG adventure. Pre-register today for exclusive rewards!',
  openGraph: {
    title: 'Eternal Tower Saga',
    description: 'Join the anime MMORPG adventure.',
    images: ['/images/p1-bg.webp'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable}`}>
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
