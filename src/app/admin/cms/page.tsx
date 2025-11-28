import Header from '@/components/admin/Header'
import prisma from '@/lib/prisma'
import CMSForm from './CMSForm'

export default async function CMSPage() {
    let config = null
    try {
        config = await prisma.siteConfig.findFirst()
    } catch (error) {
        console.error("Failed to fetch config:", error)
    }

    return (
        <div className="min-h-screen bg-slate-950">
            <Header title="Content Management" />

            <div className="p-6 max-w-4xl">
                <CMSForm config={config} />
            </div>
        </div>
    )
}
