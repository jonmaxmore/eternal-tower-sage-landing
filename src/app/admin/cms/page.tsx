import Header from '@/components/admin/Header'
import prisma from '@/lib/prisma'
import { updateSiteConfig } from '@/actions/admin'
import { GameButton } from '@/components/ui/GameButton'

export default async function CMSPage() {
    const config = await prisma.siteConfig.findFirst()

    return (
        <div className="min-h-screen bg-slate-950">
            <Header title="Content Management" />

            <div className="p-6 max-w-4xl">
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-white mb-6">General Settings</h3>

                    <form action={updateSiteConfig} className="space-y-6">
                        {/* Meta Title */}
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Meta Title</label>
                            <input
                                name="metaTitle"
                                defaultValue={config?.metaTitle}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                placeholder="Eternal Tower Saga"
                            />
                        </div>

                        {/* Meta Description */}
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Meta Description</label>
                            <textarea
                                name="metaDescription"
                                defaultValue={config?.metaDescription}
                                rows={3}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                placeholder="Join the adventure..."
                            />
                        </div>

                        {/* Hero Background URL */}
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Hero Background URL</label>
                            <input
                                name="heroBgUrl"
                                defaultValue={config?.heroBgUrl}
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                placeholder="/images/p1-bg.webp"
                            />
                            <p className="text-xs text-slate-500 mt-1">Path to image in public folder or external URL</p>
                        </div>

                        {/* Maintenance Mode */}
                        <div className="flex items-center gap-3 pt-2">
                            <input
                                type="checkbox"
                                name="isMaintenanceMode"
                                id="maintenance"
                                defaultChecked={config?.isMaintenanceMode}
                                className="w-5 h-5 rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor="maintenance" className="text-sm font-medium text-slate-300 cursor-pointer">
                                Enable Maintenance Mode
                            </label>
                        </div>

                        <div className="pt-4">
                            <GameButton type="submit" className="w-full md:w-auto px-8">
                                Save Changes
                            </GameButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
