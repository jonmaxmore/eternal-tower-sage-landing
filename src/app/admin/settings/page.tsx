import prisma from '@/lib/prisma'
import SettingsForm from './SettingsForm'

async function getSiteConfig() {
    try {
        return await prisma.siteConfig.findFirst()
    } catch (error) {
        return null
    }
}

export default async function Settings() {
    const config = await getSiteConfig()

    return <SettingsForm initialConfig={config} />
}
