'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, FileText, BarChart3, Bell, Settings, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const menuGroups = [
    {
        title: "MAIN",
        items: [
            { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
            { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
        ]
    },
    {
        title: "CMS",
        items: [
            { label: 'User Management', href: '/admin/users', icon: Users },
            { label: 'Content', href: '/admin/content', icon: FileText },
        ]
    },
    {
        title: "SYSTEM",
        items: [
            { label: 'Notifications', href: '/admin/notifications', icon: Bell },
            { label: 'Settings', href: '/admin/settings', icon: Settings },
        ]
    }
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="fixed inset-y-0 left-0 w-64 z-50 bg-[#111C44] text-white flex flex-col shadow-xl transition-all duration-300 font-sans">
            {/* Brand Area */}
            <div className="py-6 text-center border-b border-white/10">
                <span className="text-xl font-bold tracking-wide uppercase text-white">
                    ETERNAL ADMIN
                </span>
            </div>

            {/* Profile Summary (Critical Fix: Fixed Size) */}
            <div className="relative mx-auto mt-6 mb-6 text-center">
                <div className="h-20 w-20 rounded-full object-cover border-4 border-white/20 mx-auto overflow-hidden">
                    <Avatar className="h-full w-full">
                        <AvatarImage src="https://github.com/shadcn.png" className="object-cover" />
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                </div>
                <div className="mt-3">
                    <p className="text-sm font-bold text-white">Admin User</p>
                    <p className="text-xs text-gray-400">Super Admin</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-6 overflow-y-auto">
                {menuGroups.map((group, groupIndex) => (
                    <div key={groupIndex}>
                        <p className="px-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                            {group.title}
                        </p>
                        <div className="space-y-1">
                            {group.items.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-3 px-6 py-3 transition-all duration-200 group relative",
                                            isActive
                                                ? "bg-white/10 text-white border-r-4 border-blue-500"
                                                : "text-gray-400 hover:text-white"
                                        )}
                                    >
                                        <item.icon size={20} className={cn(isActive ? "text-white" : "text-gray-400 group-hover:text-white")} />
                                        <span className="font-medium text-sm">{item.label}</span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </nav>
        </aside>
    )
}
