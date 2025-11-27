
import prisma from '@/lib/prisma'
import { MoreHorizontal, Download, Search } from 'lucide-react'

async function getUsers() {
    if (!process.env.DATABASE_URL) return []
    try {
        return await prisma.user.findMany({
            orderBy: { createdAt: 'desc' },
            take: 50
        })
    } catch (e) {
        return []
    }
}

export default async function UserManagement() {
    const users = await getUsers()

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white">User Management</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors">
                    <Download size={18} />
                    <span>Export CSV</span>
                </button>
            </div>

            {/* Filters */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
                    <input
                        type="text"
                        placeholder="Search users..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-slate-950 text-slate-400 uppercase text-xs font-semibold">
                        <tr>
                            <th className="px-6 py-4">ID</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">IP Address</th>
                            <th className="px-6 py-4">Joined</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-slate-800/50 transition-colors">
                                <td className="px-6 py-4 text-slate-500 font-mono text-xs">{user.id.slice(0, 8)}...</td>
                                <td className="px-6 py-4 text-white font-medium">{user.email}</td>
                                <td className="px-6 py-4 text-slate-400">{user.ipAddress || 'N/A'}</td>
                                <td className="px-6 py-4 text-slate-400">{new Date(user.createdAt).toLocaleDateString()}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-full border border-green-500/20">
                                        Active
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
                                        <MoreHorizontal size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {users.length === 0 && (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
