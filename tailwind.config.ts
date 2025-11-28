import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)'],
                serif: ['var(--font-cinzel)'],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            keyframes: {
                'slide-in-top': {
                    '0%': { transform: 'translateY(-100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'slide-in-right': {
                    '0%': { transform: 'translateX(1000px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                'scale-pulse': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.1)' },
                },
                'up-down': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(10px)' },
                },
            },
            animation: {
                'slide-in-top': 'slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
                'fade-in': 'fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both',
                'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
                'scale-pulse': 'scale-pulse 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite',
                'up-down': 'up-down 1.8s linear infinite',
            },
        },
    },
    plugins: [],
};
export default config;
