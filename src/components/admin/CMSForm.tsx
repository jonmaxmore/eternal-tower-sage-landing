
'use client'

import { useFormStatus } from 'react-dom'
import { updateSiteConfig } from '@/actions/admin'
import { useState } from 'react'

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            disabled={pending}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors disabled:opacity-50"
        >
            {pending ? 'Saving...' : 'Save Changes'}
        </button>
    )
}

export default function CMSForm({ config }: { config: any }) {
    const [message, setMessage] = useState('')

    async function clientAction(formData: FormData) {
        const result = await updateSiteConfig(formData)
        if (result?.message) setMessage(result.message)
    }

    return (
        <form action={clientAction} className="space-y-6 bg-slate-900 p-8 rounded-xl border border-slate-800">
            {/* Theme Color */}
            <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Primary Theme Color</label>
                <div className="flex gap-4 items-center">
                    <input
                        type="color"
                        name="themeColor"
                        defaultValue={config?.themeColor || '#2563eb'}
                        className="h-12 w-24 bg-transparent border-0 cursor-pointer"
                    />
                    <input
                        type="text"
                        name="themeColorText"
                        defaultValue={config?.themeColor || '#2563eb'}
                        className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white"
                        readOnly
                    />
                </div>
                <p className="text-xs text-slate-500 mt-2">Select the primary brand color for buttons and highlights.</p>
            </div>

            {/* Hero Image */}
            <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Hero Background Image URL</label>
                <input
                    type="text"
                    name="heroBgUrl"
                    defaultValue={config?.heroBgUrl || '/images/p1-bg.webp'}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-amber-400 outline-none"
                    placeholder="/images/..."
                />
            </div>

            {message && (
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-400 text-sm">
                    {message}
                </div>
            )}

            <div className="pt-4">
                <SubmitButton />
            </div>
        </form>
    )
}
