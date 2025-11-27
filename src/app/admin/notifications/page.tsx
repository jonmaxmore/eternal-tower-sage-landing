
import { Bell, Send } from 'lucide-react'

export default function Notifications() {
    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl font-bold text-white mb-8">Notification System</h1>

            {/* Broadcast Form */}
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 mb-8">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Send size={24} className="text-blue-500" />
                    Send Broadcast
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Announcement Title..."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-2">Message Body</label>
                        <textarea
                            rows={5}
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="Write your message here..."
                        />
                    </div>
                    <div className="pt-2">
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors flex items-center gap-2">
                            <Send size={18} />
                            Send to All Users
                        </button>
                    </div>
                </div>
            </div>

            {/* Recent Alerts */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-800">
                    <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                        <Bell size={24} className="text-amber-500" />
                        Recent System Alerts
                    </h2>
                </div>
                <div className="divide-y divide-slate-800">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-6 flex items-start gap-4 hover:bg-slate-800/50 transition-colors">
                            <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                            <div>
                                <h4 className="text-white font-medium">System Maintenance Completed</h4>
                                <p className="text-slate-400 text-sm mt-1">The scheduled maintenance was completed successfully at 04:00 AM UTC.</p>
                                <span className="text-slate-600 text-xs mt-2 block">2 hours ago</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
