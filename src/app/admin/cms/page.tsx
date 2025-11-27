import prisma from '@/lib/prisma'
import CMSForm from '@/components/admin/CMSForm'

async function getConfig() {
    if (!process.env.DATABASE_URL) return null
    return await prisma.siteConfig.findFirst()
}

export default async function CMSSettings() {
    const config = await getConfig()

    return (
        <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-8">CMS Settings</h2>
            <CMSForm config={config} />
        </div>
    )
}
