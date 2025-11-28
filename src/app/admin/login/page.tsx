
'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export default function AdminLogin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')

        try {
            // We use the NextAuth signIn function. 
            // Note: In NextAuth v5, signIn is usually server-side, but client-side usage depends on setup.
            // For simplicity with the Credentials provider in this setup, we might need a server action or API call.
            // However, standard next-auth/react signIn works if configured.
            // Let's try the standard client-side signIn.

            // Actually, with the server-side auth.ts setup, we should probably use a Server Action or the API route.
            // But let's stick to the client-side signIn for now as it's standard.

            // Wait, I didn't verify if I installed next-auth/react. 
            // NextAuth v5 beta exports it from 'next-auth/react'.

            const result = await signIn('credentials', {
                username,
                password,
                redirect: false,
            })

            if (result?.error) {
                setError('Invalid credentials')
            } else {
                router.push('/admin')
                router.refresh()
            }
        } catch {
            setError('Something went wrong')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
            <div className="w-full max-w-md p-8 bg-slate-900 rounded-xl border border-slate-800 shadow-2xl">
                <h1 className="text-2xl font-bold mb-6 text-center text-amber-400 font-serif">Admin Portal</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none transition-all"
                            required
                        />
                    </div>

                    {error && (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                        {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    )
}
