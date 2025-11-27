
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
    const password = process.env.ADMIN_PASSWORD || 'admin123'
    const hashedPassword = await bcrypt.hash(password, 10)

    const admin = await prisma.admin.upsert({
        where: { username: 'admin' },
        update: {},
        create: {
            username: 'admin',
            passwordHash: hashedPassword,
        },
    })

    console.log({ admin })

    // Seed initial SiteConfig if not exists
    const config = await prisma.siteConfig.findFirst()
    if (!config) {
        await prisma.siteConfig.create({
            data: {
                themeColor: '#2563eb',
                heroBgUrl: '/images/p1-bg.webp',
                metaTitle: 'Eternal Tower Saga - Pre-register Now',
                metaDescription: 'Join the anime MMORPG adventure. Pre-register today for exclusive rewards!',
            }
        })
        console.log('Seeded SiteConfig')
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
