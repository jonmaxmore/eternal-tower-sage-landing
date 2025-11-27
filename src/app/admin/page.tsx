
import { StatsCards, GrowthChart } from '@/components/admin/DashboardWidgets'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import prisma from '@/lib/prisma'

async function getRecentUsers() {
    if (!process.env.DATABASE_URL) return []
    try {
        return await prisma.user.findMany({
            orderBy: { createdAt: 'desc' },
            take: 5
        })
    } catch (e) {
        return []
    }
}

export default async function AdminDashboard() {
    const recentUsers = await getRecentUsers()

    // Fetch real data where possible
    let totalUsers = 12543
    if (process.env.DATABASE_URL) {
        try {
            totalUsers = await prisma.user.count()
        } catch (e) {
            console.error("Failed to fetch user count:", e)
            // Fallback to mock data is already set
        }
    }

    // Mock data for other stats (to be replaced with real DB queries later)
    const stats = {
        totalVisits: 54231,
        totalUsers: totalUsers,
        conversionRate: '23.5%',
        revenue: '$12,450'
    }

    const chartData = [
        { name: 'Jan', users: 4000 },
        { name: 'Feb', users: 3000 },
        { name: 'Mar', users: 2000 },
        { name: 'Apr', users: 2780 },
        { name: 'May', users: 1890 },
        { name: 'Jun', users: 2390 },
        { name: 'Jul', users: 3490 },
    ]

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>

            {/* Stats Row */}
            <StatsCards stats={stats} />

            {/* Main Chart */}
            <GrowthChart data={chartData} />

            {/* Recent Registrations Table */}
            <Card className="border-none shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-800">Recent Registrations</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
                                <tr>
                                    <th className="px-6 py-4 rounded-l-lg">User</th>
                                    <th className="px-6 py-4">Email</th>
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4 rounded-r-lg">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {recentUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-700">
                                            {user.id.slice(0, 8)}...
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{user.email}</td>
                                        <td className="px-6 py-4 text-gray-500">{new Date(user.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">
                                            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-none shadow-none">
                                                Verified
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                                {recentUsers.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                            No recent registrations found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
