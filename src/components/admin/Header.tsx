'use client'

import { Bell, Menu, Search, User, Mail, MessageSquare } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { signOut } from 'next-auth/react'

export default function Header() {
    return (
        <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 py-4 flex justify-between items-center transition-all duration-300">
            {/* Left: Search / Toggle */}
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="lg:hidden text-gray-500">
                    <Menu size={24} />
                </Button>
                <div className="relative hidden md:block">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="text-gray-400" size={18} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 bg-gray-100/50 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500/20 outline-none w-64 text-gray-600 placeholder-gray-400 transition-all"
                    />
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                {/* Notifications */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="relative text-gray-500 hover:bg-gray-100 rounded-full">
                            <Bell size={20} />
                            <Badge className="absolute top-1 right-1 h-4 w-4 flex items-center justify-center p-0 bg-red-500 rounded-full text-[10px] border-2 border-white">
                                3
                            </Badge>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-72">
                        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">
                            <div className="flex items-start gap-2">
                                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <User size={14} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">New user registered</p>
                                    <p className="text-xs text-gray-500">2 minutes ago</p>
                                </div>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Profile */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className="h-10 w-10 rounded-full cursor-pointer shadow-sm hover:shadow-md transition-all border border-gray-200">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 cursor-pointer" onClick={() => signOut()}>
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
