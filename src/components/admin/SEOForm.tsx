
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
            className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-colors disabled:opacity-50"
        >
            {pending ? 'Updating...' : 'Update SEO'}
        </button>
    )
}

export default function SEOForm({ config }: { config: any }) {
    const [message, setMessage] = useState('')

    async function clientAction(formData: FormData) {
        const result = await updateSiteConfig(formData)
        if (result?.message) setMessage(result.message)
    }

    return (
        <form action={clientAction} className="space-y-6 bg-slate-900 p-8 rounded-xl border border-slate-800">
            {/* Meta Title */}
            <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Global Meta Title</label>
                <input
                    type="text"
                    name="metaTitle"
                    defaultValue={config?.metaTitle || 'Eternal Tower Saga'}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-amber-400 outline-none"
                />
            </div>

            {/* Meta Description */}
            <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Global Meta Description</label>
                <textarea
                    name="metaDescription"
                    rows={4}
                    defaultValue={config?.metaDescription || 'Join the anime MMORPG adventure.'}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-amber-400 outline-none"
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
