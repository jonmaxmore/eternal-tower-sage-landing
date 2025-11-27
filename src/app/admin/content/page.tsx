
import CMSForm from '@/components/admin/CMSForm'
import SEOForm from '@/components/admin/SEOForm'
import prisma from '@/lib/prisma'

async function getConfig() {
    if (!process.env.DATABASE_URL) return null
    return await prisma.siteConfig.findFirst()
}

export default async function ContentCMS() {
    const config = await getConfig()

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-white">Content Management</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Visual Settings */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-300">Visual Settings</h2>
                    <CMSForm config={config} />
                </div>

                {/* SEO Settings */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-300">SEO Configuration</h2>
                    <SEOForm config={config} />
                </div>
            </div>
        </div>
    )
}
