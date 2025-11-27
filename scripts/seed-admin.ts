
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    const password = 'admin123'
    const hashedPassword = await hash(password, 12)

    console.log(`Seeding admin user...`)

    const admin = await prisma.admin.upsert({
        where: { username: 'admin' },
        update: {
            passwordHash: hashedPassword,
        },
        create: {
            username: 'admin',
            passwordHash: hashedPassword,
        },
    })

    console.log(`Admin user seeded: ${admin.username}`)
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
