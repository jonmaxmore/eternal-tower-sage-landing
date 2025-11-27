
import { LineChartWrapper, BarChartWrapper } from '@/components/admin/Charts'

// Mock Data
const VISITS_DATA = [
    { name: 'Mon', views: 400, signups: 24 },
    { name: 'Tue', views: 300, signups: 13 },
    { name: 'Wed', views: 200, signups: 98 },
    { name: 'Thu', views: 278, signups: 39 },
    { name: 'Fri', views: 189, signups: 48 },
    { name: 'Sat', views: 239, signups: 38 },
    { name: 'Sun', views: 349, signups: 43 },
]

const COUNTRY_DATA = [
    { country: 'USA', users: 1200 },
    { country: 'Thailand', users: 900 },
    { country: 'Japan', users: 600 },
    { country: 'Brazil', users: 400 },
    { country: 'Germany', users: 300 },
]

export default function Analytics() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-white">Reports & Analytics</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Traffic Chart */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-[400px]">
                    <h3 className="text-lg font-semibold text-slate-300 mb-6">Traffic & Conversions (Last 7 Days)</h3>
                    <LineChartWrapper data={VISITS_DATA} />
                </div>

                {/* Demographics Chart */}
                <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 h-[400px]">
                    <h3 className="text-lg font-semibold text-slate-300 mb-6">Registrations by Country</h3>
                    <BarChartWrapper data={COUNTRY_DATA} />
                </div>
            </div>
        </div>
    )
}
