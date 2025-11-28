'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const SiteConfigSchema = z.object({
    heroBgUrl: z.string().optional(),
    milestonesBgUrl: z.string().optional(),
    metaTitle: z.string().min(1, "Title is required"),
    metaDescription: z.string().min(1, "Description is required"),
    isMaintenanceMode: z.boolean().optional(),
    officialSiteUrl: z.string().optional(),
    faviconUrl: z.string().optional(),
    logoUrl: z.string().optional(),
    socialFbUrl: z.string().optional(),
    socialYtUrl: z.string().optional(),
    socialDsUrl: z.string().optional(),
    btnPreRegUrl: z.string().optional(),
    btnDiscordUrl: z.string().optional(),
    btnIosUrl: z.string().optional(),
    btnGoogleUrl: z.string().optional(),
    btnWindowsUrl: z.string().optional(),
})

export async function updateSiteConfig(prevState: unknown, formData: FormData) {
    const rawData = {
        heroBgUrl: formData.get('heroBgUrl'),
        milestonesBgUrl: formData.get('milestonesBgUrl'),
        metaTitle: formData.get('metaTitle'),
        metaDescription: formData.get('metaDescription'),
        isMaintenanceMode: formData.get('isMaintenanceMode') === 'on',
        officialSiteUrl: formData.get('officialSiteUrl'),
        faviconUrl: formData.get('faviconUrl'),
        logoUrl: formData.get('logoUrl'),
        socialFbUrl: formData.get('socialFbUrl'),
        socialYtUrl: formData.get('socialYtUrl'),
        socialDsUrl: formData.get('socialDsUrl'),
        btnPreRegUrl: formData.get('btnPreRegUrl'),
        btnDiscordUrl: formData.get('btnDiscordUrl'),
        btnIosUrl: formData.get('btnIosUrl'),
        btnGoogleUrl: formData.get('btnGoogleUrl'),
        btnWindowsUrl: formData.get('btnWindowsUrl'),
    }

    const validated = SiteConfigSchema.safeParse(rawData)

    if (!validated.success) {
        return {
            success: false,
            message: "Invalid input data",
        }
    }

    try {
        // Upsert: Create if not exists, update if exists
        const existing = await prisma.siteConfig.findFirst()

        if (existing) {
            await prisma.siteConfig.update({
                where: { id: existing.id },
                data: validated.data,
            })
        } else {
            await prisma.siteConfig.create({
                data: validated.data,
            })
        }

        revalidatePath('/')
        revalidatePath('/admin/settings')

        return {
            success: true,
            message: "Configuration updated successfully",
        }
    } catch (error) {
        console.error("Failed to update config:", error)
        return {
            success: false,
            message: "Database error",
        }
    }
}
