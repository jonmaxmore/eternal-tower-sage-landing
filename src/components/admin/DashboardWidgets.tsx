'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Users, ShoppingCart, MousePointer, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react'
import dynamic from 'next/dynamic'

interface StatsProps {
    totalVisits: number
    totalUsers: number
    conversionRate: string
    revenue: string
}

export function StatsCards({ stats }: { stats: StatsProps }) {
    const statItems = [
        {
            label: 'TOTAL VISITS',
            value: stats.totalVisits.toLocaleString(),
            icon: TrendingUp,
            color: 'bg-blue-50 text-blue-500',
            trend: '+4.5%',
            trendUp: true
        },
        {
            label: 'TOTAL USERS',
            value: stats.totalUsers.toLocaleString(),
            icon: Users,
            color: 'bg-green-50 text-green-500',
            trend: '+12.5%',
            trendUp: true
        },
        {
            label: 'CONVERSION',
            value: stats.conversionRate,
            icon: MousePointer,
            color: 'bg-purple-50 text-purple-500',
            trend: '-2.4%',
            trendUp: false
        },
        {
            label: 'REVENUE',
            value: stats.revenue,
            icon: ShoppingCart,
            color: 'bg-orange-50 text-orange-500',
            trend: '+8.2%',
            trendUp: true
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statItems.map((stat, index) => (
                <Card key={index} className="border-none shadow-[0_20px_27px_0_rgba(0,0,0,0.05)] rounded-2xl hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-gray-400 mb-1">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{stat.value}</h3>

                                {/* Trend Indicator */}
                                <div className={`flex items-center text-sm font-medium ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                                    {stat.trendUp ? <ArrowUp size={16} className="mr-1" /> : <ArrowDown size={16} className="mr-1" />}
                                    <span>{stat.trend}</span>
                                    <span className="text-gray-400 ml-1 font-normal">since last month</span>
                                </div>
                            </div>

                            <div className={`h-12 w-12 rounded-full flex items-center justify-center ${stat.color}`}>
                                <stat.icon size={22} />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

const GrowthChart = dynamic(() => import('./GrowthChart'), { ssr: false })

export { GrowthChart }
