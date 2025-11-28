'use client'

import Image from 'next/image'
import { GameButton } from '@/components/ui/GameButton'
import { motion } from 'framer-motion'
import { Play, MessageSquare } from 'lucide-react'

interface HeroProps {
    onOpenModal: () => void
    config?: unknown
}

export default function Hero({ onOpenModal, config }: HeroProps) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const safeConfig = config as any
    return (
        <section className="relative w-full h-screen overflow-hidden bg-secondary-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={safeConfig?.heroBgUrl || "/images/hero-bg.webp"}
                    alt="Eternal Tower Saga Background"
                    fill
                    className="object-cover object-center opacity-60"
                    priority
                    quality={90}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 via-transparent to-secondary-900 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/50 via-transparent to-secondary-900/50 z-10" />
            </div>

            {/* Content Container */}
            <div className="relative z-20 container mx-auto h-full flex flex-col items-center justify-center px-4 text-center">

                {/* Logo Area */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8 md:mb-12 w-full max-w-[600px]"
                >
                    <Image
                        src={safeConfig?.logoUrl || "/images/logo.svg"}
                        alt="Eternal Tower Saga Logo"
                        width={600}
                        height={250}
                        className="w-full h-auto drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]"
                        priority
                    />
                </motion.div>

                {/* Slogan / Text */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-12 space-y-4"
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-100 to-primary-500 drop-shadow-lg">
                        Ascend the Eternal Tower
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light tracking-wide">
                        Join thousands of adventurers in the ultimate anime MMORPG experience. Pre-register now for exclusive legendary rewards.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 w-full max-w-xl mx-auto"
                >
                    <GameButton
                        variant="primary"
                        onClick={onOpenModal}
                        className="w-full md:flex-1 text-lg py-6"
                    >
                        <Play className="w-5 h-5 fill-current" />
                        Pre-Register Now
                    </GameButton>

                    <GameButton
                        variant="secondary"
                        onClick={() => window.open(safeConfig?.socialDsUrl || "#", "_blank")}
                        className="w-full md:flex-1 text-lg py-6"
                    >
                        <MessageSquare className="w-5 h-5" />
                        Join Discord
                    </GameButton>
                </motion.div>

                {/* Platform Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mt-12 flex gap-6 opacity-70"
                >
                    <div className="flex flex-col items-center gap-2 text-xs text-slate-400 uppercase tracking-widest">
                        <span className="border-b border-primary-500/30 pb-1">Available On</span>
                        <div className="flex gap-4">
                            <span className="hover:text-primary-400 transition-colors cursor-default">PC</span>
                            <span className="hover:text-primary-400 transition-colors cursor-default">iOS</span>
                            <span className="hover:text-primary-400 transition-colors cursor-default">Android</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
