import prisma from '@/lib/prisma'
import SiteConfigForm from '@/components/admin/SiteConfigForm'

async function getSiteConfig() {
    try {
        return await prisma.siteConfig.findFirst()
    } catch (error) {
        return null
    }
}

export default async function Settings() {
    const config = await getSiteConfig()

    return <SiteConfigForm initialConfig={config} />
}
