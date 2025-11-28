import Image from 'next/image'
import { Facebook, Youtube, MessageSquare } from 'lucide-react'
import { GameButton } from '@/components/ui/GameButton'

export default function Footer() {
    return (
        <footer className="relative pt-16 pb-8 border-t border-secondary-800 bg-secondary-950 text-slate-400">
            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-col items-center mb-12">
                    {/* Logo */}
                    <div className="w-48 mb-8 opacity-80 hover:opacity-100 transition-opacity">
                        <Image
                            src="/images/logo.svg"
                            alt="Eternal Tower Saga"
                            width={200}
                            height={80}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 mb-8">
                        <GameButton variant="ghost" className="w-12 h-12 p-0 rounded-full hover:bg-blue-600/20 hover:text-blue-400" aria-label="Facebook">
                            <Facebook size={24} />
                        </GameButton>
                        <GameButton variant="ghost" className="w-12 h-12 p-0 rounded-full hover:bg-red-600/20 hover:text-red-400" aria-label="YouTube">
                            <Youtube size={24} />
                        </GameButton>
                        <GameButton variant="ghost" className="w-12 h-12 p-0 rounded-full hover:bg-indigo-600/20 hover:text-indigo-400" aria-label="Discord">
                            <MessageSquare size={24} />
                        </GameButton>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-secondary-800 mb-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-slate-600">
                    <p>© 2024 Eternal Tower Saga. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
