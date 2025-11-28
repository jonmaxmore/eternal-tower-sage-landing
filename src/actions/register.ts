'use server'

import { z } from 'zod'
import prisma from '@/lib/prisma'
import { headers } from 'next/headers'

import { UserRegistrationSchema } from '@/lib/schemas'

const schema = UserRegistrationSchema

export type State = {
    success: boolean
    message: string
} | null

export async function registerUser(prevState: State, formData: FormData): Promise<State> {
    const email = formData.get('email')

    const validatedFields = schema.safeParse({
        email,
    })

    if (!validatedFields.success) {
        return {
            success: false,
            message: validatedFields.error.flatten().fieldErrors.email?.[0] || "Invalid email",
        }
    }

    const validEmail = validatedFields.data.email

    // Get IP
    const headersList = await headers()
    const ip = headersList.get('x-forwarded-for') || 'unknown'

    try {
        // Rate Limit: Check if IP registered in last minute
        // Note: This requires the DB to be reachable. If DB is not set up, this will fail.
        // For production, ensure DATABASE_URL is set.

        if (process.env.DATABASE_URL) {
            const oneMinuteAgo = new Date(Date.now() - 60 * 1000)
            const recentRegistration = await prisma.user.findFirst({
                where: {
                    ipAddress: ip,
                    createdAt: {
                        gte: oneMinuteAgo
                    }
                }
            })

            if (recentRegistration) {
                return {
                    success: false,
                    message: "Too many requests. Please try again later.",
                }
            }

            // Check if email exists
            const existingUser = await prisma.user.findUnique({
                where: {
                    email: validEmail
                }
            })

            if (existingUser) {
                return {
                    success: false,
                    message: "Email already registered.",
                }
            }

            // Create User
            await prisma.user.create({
                data: {
                    email: validEmail,
                    ipAddress: ip,
                }
            })
        } else {
            console.error("DATABASE_URL not set.")
            return {
                success: false,
                message: "System configuration error. Please contact support.",
            }
        }

        return {
            success: true,
            message: "Registration successful!",
        }

    } catch (error) {
        console.error("Registration Error:", error)
        return {
            success: false,
            message: "Something went wrong. Please try again.",
        }
    }
}
