import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="relative pt-16 pb-8 border-t border-slate-900 text-slate-300">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-top bg-no-repeat opacity-50"
                style={{ backgroundImage: 'url(https://res.17996cdn.net/bpsr/pre/foot_bg.jpg)' }}
            />

            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-col items-center mb-12">
                    {/* Logo */}
                    <div className="w-48 mb-8 opacity-80 hover:opacity-100 transition-opacity">
                        <Image
                            src="/images/foot-logo.png"
                            alt="Eternal Tower Saga"
                            width={200}
                            height={80}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 mb-8">
                        <a href="#" className="hover:scale-110 transition-transform opacity-70 hover:opacity-100">
                            <Image src="/images/fb-bt2.png" alt="Facebook" width={32} height={32} />
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform opacity-70 hover:opacity-100">
                            <Image src="/images/ytb-bt2.png" alt="YouTube" width={32} height={32} />
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform opacity-70 hover:opacity-100">
                            <Image src="/images/ds-bt2.png" alt="Discord" width={32} height={32} />
                        </a>
                    </div>

                    {/* Navigation Removed as per request */}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-slate-900 mb-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-slate-600">
                    <p>© 2024 Eternal Tower Saga. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
