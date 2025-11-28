'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'

const SiteConfigSchema = z.object({
    heroBgUrl: z.string().optional(),
    metaTitle: z.string().min(1, "Title is required"),
    metaDescription: z.string().min(1, "Description is required"),
    isMaintenanceMode: z.boolean().optional(),
})

export async function updateSiteConfig(prevState: any, formData: FormData) {
    const rawData = {
        heroBgUrl: formData.get('heroBgUrl'),
        metaTitle: formData.get('metaTitle'),
        metaDescription: formData.get('metaDescription'),
        isMaintenanceMode: formData.get('isMaintenanceMode') === 'on',
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
        // Since we only have one config, we can findFirst or just use a fixed ID if we had one.
        // For simplicity, we'll check if one exists.
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
        revalidatePath('/admin/cms')

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
