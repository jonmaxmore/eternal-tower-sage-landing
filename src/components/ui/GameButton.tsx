import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GameButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    children: ReactNode;
}

export function GameButton({ className, isLoading, variant = 'primary', children, ...props }: GameButtonProps) {
    const baseStyles = "relative font-serif font-bold uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden group";

    const variants = {
        primary: "bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-secondary-900 shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 py-4 px-8 rounded-sm clip-path-polygon",
        secondary: "bg-secondary-800 hover:bg-secondary-700 text-primary-400 border border-primary-900/50 hover:border-primary-500/50 py-3 px-6 rounded-sm",
        outline: "bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-secondary-900 py-3 px-6 rounded-sm",
        ghost: "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white py-2 px-4 rounded-sm",
    };

    return (
        <button
            className={cn(
                baseStyles,
                variants[variant],
                className
            )}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {/* Shine Effect for Primary */}
            {variant === 'primary' && (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
            )}

            {isLoading ? (
                <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    <span className="sr-only">Loading...</span>
                </>
            ) : (
                <span className="relative z-20 flex items-center gap-2">
                    {children}
                </span>
            )}
        </button>
    )
}
