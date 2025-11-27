import prisma from '@/lib/prisma';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

async function getUserCount() {
    if (!process.env.DATABASE_URL) return 150000; // Mock count for demo
    try {
        return await prisma.user.count();
    } catch (error) {
        console.error("Failed to fetch user count", error);
        return 150000; // Fallback
    }
}

const MILESTONES = [
    { target: 50000, label: "50K", reward: "Starter Pack", image: "/images/ds-bt2.png" },
    { target: 100000, label: "100K", reward: "Luno Mount", image: "/images/fb-bt2.png" },
    { target: 200000, label: "200K", reward: "Star Chest", image: "/images/ytb-bt2.png" },
    { target: 500000, label: "500K", reward: "Exclusive Skin", image: "/images/gg-btn.png" },
];

export default async function Milestones() {
    const userCount = await getUserCount();
    const maxTarget = MILESTONES[MILESTONES.length - 1].target;
    const progressPercent = Math.min(100, Math.max(0, (userCount / maxTarget) * 100));

    return (
        <section className="py-12 bg-slate-900 text-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-amber-400 font-serif">
                    Pre-Registration Milestones
                </h2>

                <div className="text-center mb-12">
                    <p className="text-xl text-blue-200">Current Adventurers: <span className="text-white font-bold text-2xl">{userCount.toLocaleString()}</span></p>
                </div>

                {/* Desktop Roadmap */}
                <div className="hidden md:block relative max-w-4xl mx-auto">
                    {/* Progress Bar Background */}
                    <div className="absolute top-1/2 left-0 w-full h-4 bg-slate-700 -translate-y-1/2 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-blue-600 to-amber-400 transition-all duration-1000 ease-out"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>

                    <div className="relative flex justify-between items-start w-full">
                        {MILESTONES.map((milestone, index) => {
                            const achieved = userCount >= milestone.target;
                            return (
                                <div key={index} className="flex flex-col items-center group relative">
                                    {/* Marker */}
                                    <div className={cn(
                                        "w-8 h-8 rounded-full border-4 z-10 mb-4 transition-colors",
                                        achieved ? "bg-amber-400 border-amber-200" : "bg-slate-800 border-slate-600"
                                    )}>
                                        {achieved && <Check className="w-full h-full p-1 text-slate-900" />}
                                    </div>

                                    {/* Label */}
                                    <div className="text-sm font-bold mb-2">{milestone.label}</div>

                                    {/* Reward Card */}
                                    <div className={cn(
                                        "relative w-24 h-24 bg-slate-800 rounded-lg border border-slate-700 p-2 transition-transform hover:scale-110",
                                        achieved && "border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                                    )}>
                                        <div className="relative w-full h-full">
                                            {/* Use Image component if we have real images, otherwise placeholder text */}
                                            <Image
                                                src={milestone.image}
                                                alt={milestone.reward}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                        {achieved && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                                                <span className="text-amber-400 font-bold -rotate-12 border-2 border-amber-400 px-1 rounded">ACHIEVED</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile List */}
                <div className="md:hidden space-y-4">
                    {MILESTONES.map((milestone, index) => {
                        const achieved = userCount >= milestone.target;
                        return (
                            <div key={index} className={cn(
                                "flex items-center p-4 rounded-lg border",
                                achieved ? "bg-slate-800/80 border-amber-400/50" : "bg-slate-800/50 border-slate-700"
                            )}>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="font-bold text-lg">{milestone.label}</span>
                                        {achieved && <span className="text-xs bg-amber-400 text-slate-900 px-2 py-0.5 rounded font-bold">ACHIEVED</span>}
                                    </div>
                                    <div className="text-sm text-slate-300">{milestone.reward}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
