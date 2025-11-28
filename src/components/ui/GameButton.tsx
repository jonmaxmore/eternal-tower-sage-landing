import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GameButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    variant?: 'primary' | 'ghost' | 'unstyled';
    children: ReactNode;
}

export function GameButton({ className, isLoading, variant = 'primary', children, ...props }: GameButtonProps) {
    const baseStyles = "transform transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";

    const variants = {
        primary: "w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-3 rounded-lg shadow-lg shadow-blue-600/20 hover:scale-[1.02]",
        ghost: "bg-transparent hover:bg-white/10 text-white border border-white/20 py-2 px-4 rounded-lg",
        unstyled: "hover:brightness-110", // Minimal styles for wrapping images
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
            {isLoading ? (
                <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    {variant === 'primary' && "Processing..."}
                </>
            ) : (
                children
            )}
        </button>
    )
}
