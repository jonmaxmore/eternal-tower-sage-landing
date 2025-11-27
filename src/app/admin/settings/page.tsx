
import { Settings as SettingsIcon, Shield, CreditCard } from 'lucide-react'

export default function Settings() {
    return (
        <div className="max-w-4xl space-y-8">
            <h1 className="text-3xl font-bold text-white">System Settings</h1>

            {/* General Settings */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-800">
                    <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                        <SettingsIcon size={24} className="text-slate-400" />
                        General Configuration
                    </h2>
                </div>
                <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-white font-medium">Maintenance Mode</h3>
                            <p className="text-slate-400 text-sm">Prevent public access to the landing page.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-white font-medium">Admin Dark Mode</h3>
                            <p className="text-slate-400 text-sm">Force dark theme for admin panel.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Security */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-800">
                    <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                        <Shield size={24} className="text-green-500" />
                        Security & Access
                    </h2>
                </div>
                <div className="p-6">
                    <button className="px-4 py-2 border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors">
                        Manage API Keys
                    </button>
                </div>
            </div>
        </div>
    )
}
