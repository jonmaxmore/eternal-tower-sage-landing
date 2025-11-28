'use client'

import { useActionState, useState } from 'react'
import { updateSiteConfig } from '@/actions/admin'
import { Settings as SettingsIcon, Image as ImageIcon, Save, LayoutDashboard } from 'lucide-react'
import Image from 'next/image'
import { GameButton } from '@/components/ui/GameButton'

interface SiteConfigFormProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initialConfig: any
}

const initialState = {
    success: false,
    message: '',
}

export default function SiteConfigForm({ initialConfig }: SiteConfigFormProps) {
    const [state, formAction] = useActionState(updateSiteConfig, initialState)
    const [activeTab, setActiveTab] = useState<'general' | 'assets'>('general')

    return (
        <div className="space-y-6">
            {/* Header with Save Button */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Site Configuration</h1>
                    <p className="text-slate-400">Manage your website's global settings and assets.</p>
                </div>
                <GameButton
                    onClick={() => document.querySelector('form')?.requestSubmit()}
                    className="w-full md:w-auto"
                >
                    <Save size={18} />
                    Save Changes
                </GameButton>
            </div>

            {/* Status Message */}
            {state?.message && (
                <div className={`p-4 rounded-lg border ${state.success ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                    {state.message}
                </div>
            )}

            {/* Tabs */}
            <div className="flex border-b border-slate-800">
                <button
                    onClick={() => setActiveTab('general')}
                    className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'general'
                            ? 'border-primary-500 text-primary-500'
                            : 'border-transparent text-slate-400 hover:text-slate-200'
                        }`}
                >
                    <div className="flex items-center gap-2">
                        <SettingsIcon size={16} />
                        General Settings
                    </div>
                </button>
                <button
                    onClick={() => setActiveTab('assets')}
                    className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'assets'
                            ? 'border-primary-500 text-primary-500'
                            : 'border-transparent text-slate-400 hover:text-slate-200'
                        }`}
                >
                    <div className="flex items-center gap-2">
                        <ImageIcon size={16} />
                        Visual Assets
                    </div>
                </button>
            </div>

            <form action={formAction}>
                {/* General Tab */}
                <div className={activeTab === 'general' ? 'block' : 'hidden'}>
                    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                        <div className="p-6 border-b border-slate-800">
                            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                                <LayoutDashboard size={24} className="text-slate-400" />
                                General Configuration
                            </h2>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Meta Title</label>
                                    <input
                                        name="metaTitle"
                                        defaultValue={initialConfig?.metaTitle}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                                        placeholder="Eternal Tower Saga"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Meta Description</label>
                                    <input
                                        name="metaDescription"
                                        defaultValue={initialConfig?.metaDescription}
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                                        placeholder="Join the adventure..."
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                                <div>
                                    <h3 className="text-white font-medium">Maintenance Mode</h3>
                                    <p className="text-slate-400 text-sm">Prevent public access to the landing page.</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="isMaintenanceMode"
                                        className="sr-only peer"
                                        defaultChecked={initialConfig?.isMaintenanceMode}
                                    />
                                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-900 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Assets Tab */}
                <div className={activeTab === 'assets' ? 'block' : 'hidden'}>
                    <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                        <div className="p-6 border-b border-slate-800">
                            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                                <ImageIcon size={24} className="text-primary-500" />
                                Assets Configuration
                            </h2>
                        </div>
                        <div className="p-6 space-y-8">
                            {/* Backgrounds */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-white border-b border-slate-800 pb-2">Backgrounds</h3>
                                <div className="grid grid-cols-1 gap-6">
                                    <ImageInput label="Hero Background URL" name="heroBgUrl" defaultValue={initialConfig?.heroBgUrl} />
                                    <ImageInput label="Milestones Background URL" name="milestonesBgUrl" defaultValue={initialConfig?.milestonesBgUrl} />
                                </div>
                            </div>

                            {/* Logos & Icons */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-white border-b border-slate-800 pb-2">Logos & Icons</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <ImageInput label="Main Logo URL" name="logoUrl" defaultValue={initialConfig?.logoUrl} />
                                    <ImageInput label="Favicon URL" name="faviconUrl" defaultValue={initialConfig?.faviconUrl} />
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-white border-b border-slate-800 pb-2">Social Buttons</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <ImageInput label="Facebook Button URL" name="socialFbUrl" defaultValue={initialConfig?.socialFbUrl} />
                                    <ImageInput label="YouTube Button URL" name="socialYtUrl" defaultValue={initialConfig?.socialYtUrl} />
                                    <ImageInput label="Discord Button URL" name="socialDsUrl" defaultValue={initialConfig?.socialDsUrl} />
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-white border-b border-slate-800 pb-2">Action Buttons</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <ImageInput label="Pre-Register Button URL" name="btnPreRegUrl" defaultValue={initialConfig?.btnPreRegUrl} />
                                    <ImageInput label="Discord Large Button URL" name="btnDiscordUrl" defaultValue={initialConfig?.btnDiscordUrl} />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <ImageInput label="iOS Button URL" name="btnIosUrl" defaultValue={initialConfig?.btnIosUrl} />
                                    <ImageInput label="Google Play Button URL" name="btnGoogleUrl" defaultValue={initialConfig?.btnGoogleUrl} />
                                    <ImageInput label="Windows Button URL" name="btnWindowsUrl" defaultValue={initialConfig?.btnWindowsUrl} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

function ImageInput({ label, name, defaultValue }: { label: string, name: string, defaultValue?: string }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">{label}</label>
            <div className="flex gap-4">
                <input
                    name={name}
                    defaultValue={defaultValue}
                    placeholder="/images/..."
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
                {defaultValue && (
                    <div className="w-10 h-10 relative bg-slate-950 rounded border border-slate-800 overflow-hidden shrink-0">
                        <Image
                            src={defaultValue}
                            alt="Preview"
                            fill
                            className="object-contain"
                            unoptimized
                        />
                    </div>
                )}
            </div>
        </div>
    )
}
