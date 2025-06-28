import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Check if demo user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email: 'demo@example.com' }
  })

  if (existingUser) {
    console.log('✅ Demo user already exists')
    return
  }

  // Create demo user
  const passwordHash = await bcrypt.hash('password123', 12)
  
  const demoUser = await prisma.user.create({
    data: {
      email: 'demo@example.com',
      firstName: 'Demo',
      lastName: 'User',
      passwordHash,
      emailVerified: true
    }
  })

  console.log('✅ Demo user created:', demoUser.email)

  // Create some demo categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        userId: demoUser.id,
        name: 'Food & Dining',
        color: '#EF4444',
        icon: '🍽️',
        isSystemCategory: true
      }
    }),
    prisma.category.create({
      data: {
        userId: demoUser.id,
        name: 'Transportation',
        color: '#3B82F6',
        icon: '🚗',
        isSystemCategory: true
      }
    }),
    prisma.category.create({
      data: {
        userId: demoUser.id,
        name: 'Shopping',
        color: '#8B5CF6',
        icon: '🛍️',
        isSystemCategory: true
      }
    }),
    prisma.category.create({
      data: {
        userId: demoUser.id,
        name: 'Entertainment',
        color: '#F59E0B',
        icon: '🎬',
        isSystemCategory: true
      }
    }),
    prisma.category.create({
      data: {
        userId: demoUser.id,
        name: 'Salary',
        color: '#10B981',
        icon: '💰',
        isSystemCategory: true
      }
    })
  ])

  console.log('✅ Demo categories created')

  // Create a demo account
  const demoAccount = await prisma.account.create({
    data: {
      userId: demoUser.id,
      accountName: 'Main Checking',
      accountType: 'CHECKING',
      bankName: 'Demo Bank',
      balance: 5000.00
    }
  })

  console.log('✅ Demo account created')

  console.log('🎉 Database seeding completed!')
  console.log('📧 Demo credentials: demo@example.com / password123')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 