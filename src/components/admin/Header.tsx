'use client'

export default function Header({ title }: { title: string }) {
    return (
        <header className="bg-slate-900 border-b border-slate-800 p-6 sticky top-0 z-40">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
        </header>
    )
}
