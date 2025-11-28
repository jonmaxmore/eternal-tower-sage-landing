'use client'

import { useActionState } from 'react'
import { updateSiteConfig } from '@/actions/admin'
import { Settings as SettingsIcon, Image as ImageIcon, Save } from 'lucide-react'
import Image from 'next/image'

interface SettingsFormProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    initialConfig: any
}

const initialState = {
    success: false,
    message: '',
}

export default function SettingsForm({ initialConfig }: SettingsFormProps) {
    const [state, formAction] = useActionState(updateSiteConfig, initialState)

    return (
        <form action={formAction} className="max-w-4xl space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white">System Settings</h1>
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
                >
                    <Save size={20} />
                    Save Changes
                </button>
            </div>

            {state?.message && (
                <div className={`p-4 rounded-lg ${state.success ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                    {state.message}
                </div>
            )}

            {/* General Settings */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-800">
                    <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                        <SettingsIcon size={24} className="text-slate-400" />
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
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Meta Description</label>
                            <input
                                name="metaDescription"
                                defaultValue={initialConfig?.metaDescription}
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                            <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Assets Configuration */}
            <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-800">
                    <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                        <ImageIcon size={24} className="text-purple-500" />
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
        </form>
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
                    className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                {defaultValue && (
                    <div className="w-10 h-10 relative bg-slate-800 rounded border border-slate-700 overflow-hidden shrink-0">
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
