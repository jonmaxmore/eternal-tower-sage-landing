'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import PreRegModal from '@/components/PreRegModal'

export default function HeroSection({ heroBgUrl }: { heroBgUrl?: string }) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Hero onOpenModal={() => setIsModalOpen(true)} heroBgUrl={heroBgUrl} />
            <PreRegModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
