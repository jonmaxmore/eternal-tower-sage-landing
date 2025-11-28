import { LucideIcon } from 'lucide-react'

interface StatCardProps {
    title: string
    value: string | number
    icon: LucideIcon
    trend?: string
}

export default function StatCard({ title, value, icon: Icon, trend }: StatCardProps) {
    return (
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-400 font-medium">{title}</h3>
                <div className="p-2 bg-slate-800 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-400" />
                </div>
            </div>
            <div className="flex items-end gap-3">
                <span className="text-3xl font-bold text-white">{value}</span>
                {trend && (
                    <span className="text-sm text-emerald-400 mb-1">{trend}</span>
                )}
            </div>
        </div>
    )
}
