'use client'

import { useState } from 'react'
import Hero from '@/components/Hero'
import PreRegModal from '@/components/PreRegModal'

export default function HeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Hero onOpenModal={() => setIsModalOpen(true)} />
            <PreRegModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
