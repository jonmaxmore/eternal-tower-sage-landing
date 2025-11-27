'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Facebook, Youtube, Gamepad2 } from 'lucide-react'

interface HeroProps {
    onOpenModal: () => void
}

export default function Hero({ onOpenModal }: HeroProps) {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 200])

    return (
        <section className="relative h-screen w-full overflow-hidden bg-slate-900">
            {/* Background Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/images/p1-bg.webp"
                    alt="Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-slate-900" />
            </motion.div>

            {/* Particles / Floating Elements (Simulated) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Add some floating particles if needed, keeping it simple for now */}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-between py-6 px-4">
                {/* Header */}
                <header className="w-full max-w-7xl flex justify-between items-center">
                    {/* Logo */}
                    <div className="w-32 md:w-48">
                        <Image
                            src="/images/logo.svg"
                            alt="Eternal Tower Saga"
                            width={200}
                            height={80}
                            className="w-full h-auto drop-shadow-lg"
                        />
                    </div>

                    {/* Socials */}
                    <div className="flex gap-3 md:gap-4">
                        <a href="#" className="p-2 bg-black/40 backdrop-blur-md rounded-full hover:bg-blue-600 transition-colors text-white border border-white/10"><Facebook size={20} /></a>
                        <a href="#" className="p-2 bg-black/40 backdrop-blur-md rounded-full hover:bg-indigo-600 transition-colors text-white border border-white/10"><Gamepad2 size={20} /></a>
                        <a href="#" className="p-2 bg-black/40 backdrop-blur-md rounded-full hover:bg-red-600 transition-colors text-white border border-white/10"><Youtube size={20} /></a>
                    </div>
                </header>

                {/* Main CTA */}
                <div className="flex flex-col items-center text-center mb-16 md:mb-24 w-full max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-7xl font-bold text-white mb-6 font-serif drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] tracking-wide"
                    >
                        <span className="block text-white">FORGE YOUR LEGEND</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">
                            IN THE ETERNAL TOWER
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-blue-100 text-lg md:text-2xl max-w-2xl mb-10 drop-shadow-md font-light"
                    >
                        The gates are opening. Join millions in the anime MMORPG that defines a generation.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <button
                            onClick={onOpenModal}
                            className="group relative px-10 py-4 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full text-white font-bold text-xl shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:scale-105 transition-all duration-300 overflow-hidden border border-blue-400/30"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                PRE-REGISTER NOW
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>

                        {/* Platform Badges */}
                        <div className="flex gap-4 items-center opacity-90 hover:opacity-100 transition-opacity">
                            <div className="h-10 w-auto relative">
                                <Image src="/images/ios-btn.png" alt="App Store" width={140} height={45} className="h-full w-auto object-contain" />
                            </div>
                            <div className="h-10 w-auto relative">
                                <Image src="/images/gg-btn.png" alt="Google Play" width={140} height={45} className="h-full w-auto object-contain" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 text-blue-200/60 text-sm tracking-widest uppercase"
                >
                    Scroll to Explore
                </motion.div>
            </div>
        </section>
    )
}
