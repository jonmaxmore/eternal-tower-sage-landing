import prisma from '@/lib/prisma'
import SEOForm from '@/components/admin/SEOForm'

async function getConfig() {
    if (!process.env.DATABASE_URL) return null
    return await prisma.siteConfig.findFirst()
}

export default async function SEOManager() {
    const config = await getConfig()

    return (
        <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-8">SEO Manager</h2>
            <SEOForm config={config} />
        </div>
    )
}
