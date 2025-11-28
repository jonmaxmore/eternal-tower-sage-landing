'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import PreRegModal from '@/components/PreRegModal'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HeroSection({ config }: { config?: any }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Hero onOpenModal={() => setIsModalOpen(true)} config={config} />
            <PreRegModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
