import Header from '@/components/admin/Header'
import StatCard from '@/components/admin/StatCard'
import prisma from '@/lib/prisma'
import { Users, UserPlus, Globe } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function AdminDashboard() {
    // Fetch real data
    const totalUsers = await prisma.user.count()

    // Get users registered in last 24h
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)
    const newUsers = await prisma.user.count({
        where: {
            createdAt: {
                gte: oneDayAgo
            }
        }
    })

    return (
        <div className="min-h-screen bg-slate-950">
            <Header title="Dashboard Overview" />

            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <StatCard
                        title="Total Pre-registrations"
                        value={totalUsers.toLocaleString()}
                        icon={Users}
                        trend="+12% from last week"
                    />
                    <StatCard
                        title="New Users (24h)"
                        value={newUsers.toLocaleString()}
                        icon={UserPlus}
                    />
                    <StatCard
                        title="Active Regions"
                        value="Global"
                        icon={Globe}
                    />
                </div>

                {/* Recent Activity Table Placeholder */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Recent Registrations</h3>
                    <div className="text-slate-400 text-sm">
                        <p>Detailed user list coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
