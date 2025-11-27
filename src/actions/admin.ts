
'use server'

import prisma from '@/lib/prisma'
import { auth } from '@/auth'
import { revalidatePath } from 'next/cache'

export async function updateSiteConfig(formData: FormData) {
    const session = await auth()
    if (!session) return { success: false, message: "Unauthorized" }

    const themeColor = formData.get('themeColor') as string
    const heroBgUrl = formData.get('heroBgUrl') as string
    const metaTitle = formData.get('metaTitle') as string
    const metaDescription = formData.get('metaDescription') as string

    try {
        // Upsert to ensure one config exists
        const config = await prisma.siteConfig.findFirst()

        if (config) {
            await prisma.siteConfig.update({
                where: { id: config.id },
                data: {
                    themeColor: themeColor || undefined,
                    heroBgUrl: heroBgUrl || undefined,
                    metaTitle: metaTitle || undefined,
                    metaDescription: metaDescription || undefined,
                }
            })
        } else {
            await prisma.siteConfig.create({
                data: {
                    themeColor: themeColor || '#2563eb',
                    heroBgUrl: heroBgUrl || '/images/p1-bg.webp',
                    metaTitle: metaTitle || 'Eternal Tower Saga',
                    metaDescription: metaDescription || 'Join the adventure.',
                }
            })
        }

        revalidatePath('/')
        revalidatePath('/admin/cms')
        revalidatePath('/admin/seo')

        return { success: true, message: "Configuration updated successfully" }
    } catch (error) {
        console.error("Failed to update config", error)
        return { success: false, message: "Failed to update configuration" }
    }
}
