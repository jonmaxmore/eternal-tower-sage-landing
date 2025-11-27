'use client'

import Image from 'next/image'

interface HeroProps {
    onOpenModal: () => void
    heroBgUrl?: string
}

export default function Hero({ onOpenModal, heroBgUrl }: HeroProps) {
    return (
        <div className="relative h-screen w-full overflow-hidden font-sans text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: 'url(/images/p1-bg.webp)' }}
            />

            {/* Overlay Gradient (Optional, for text readability) */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-between px-6 py-6 md:px-12 md:py-8">

                {/* Top Bar */}
                <div className="flex justify-between items-start">
                    {/* Logo (Top Left) */}
                    <div className="w-48 md:w-64">
                        <Image
                            src="/images/logo.svg"
                            alt="Eternal Tower Saga"
                            width={256}
                            height={100}
                            className="w-full h-auto drop-shadow-lg"
                            priority
                        />
                    </div>

                    {/* Social Icons (Top Right) */}
                    <div className="flex gap-3">
                        <a href="#" className="hover:scale-110 transition-transform">
                            <Image src="/images/fb-bt2.png" alt="Facebook" width={40} height={40} />
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform">
                            <Image src="/images/ytb-bt2.png" alt="YouTube" width={40} height={40} />
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform">
                            <Image src="/images/ds-bt2.png" alt="Discord" width={40} height={40} />
                        </a>
                    </div>
                </div>

                {/* Bottom Area (Centered Actions) */}
                <div className="flex flex-col items-center gap-6 mb-8 md:mb-12 w-full">

                    {/* Primary Action Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl justify-center items-center">
                        {/* Pre-register Button */}
                        <button
                            onClick={onOpenModal}
                            className="hover:brightness-110 transition-all active:scale-95"
                        >
                            <Image src="/images/Btn-mail.png" alt="Pre-register" width={280} height={80} className="h-14 w-auto md:h-16" />
                        </button>

                        {/* Discord Button */}
                        <button className="hover:brightness-110 transition-all active:scale-95">
                            <Image src="/images/Btn-dc.png" alt="Discord" width={280} height={80} className="h-14 w-auto md:h-16" />
                        </button>
                    </div>

                    {/* Platform Badges */}
                    <div className="flex gap-3">
                        <button className="hover:brightness-110 transition-all active:scale-95">
                            <Image src="/images/ios-btn.png" alt="App Store" width={140} height={45} className="h-10 w-auto" />
                        </button>
                        <button className="hover:brightness-110 transition-all active:scale-95">
                            <Image src="/images/gg-btn.png" alt="Google Play" width={140} height={45} className="h-10 w-auto" />
                        </button>
                        <button className="hover:brightness-110 transition-all active:scale-95">
                            <Image src="/images/win-btn.png" alt="Windows" width={140} height={45} className="h-10 w-auto" />
                        </button>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="mt-4 animate-bounce text-white/70">
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                            <div className="w-1 h-2 bg-white rounded-full animate-scroll" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
