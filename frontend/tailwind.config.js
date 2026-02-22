/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Space Grotesk', 'Inter', 'sans-serif'],
            },
            colors: {
                // Brand palette
                brand: {
                    50: '#f0f4ff',
                    100: '#e0e9ff',
                    200: '#c7d7fe',
                    300: '#a5bbfc',
                    400: '#8193f8',
                    500: '#6366f1',  // Primary indigo
                    600: '#4f46e5',
                    700: '#4338ca',
                    800: '#3730a3',
                    900: '#312e81',
                    950: '#1e1b4b',
                },
                accent: {
                    purple: '#a855f7',
                    pink: '#ec4899',
                    cyan: '#22d3ee',
                    gold: '#f59e0b',
                    green: '#10b981',
                },
                // Dark background shades
                dark: {
                    950: '#04050f',
                    900: '#080d1f',
                    800: '#0d1530',
                    700: '#111d3f',
                    600: '#1a2755',
                    500: '#1e2f60',
                },
                streak: {
                    fire: '#f97316',
                    ember: '#fb923c',
                    glow: '#fbbf24',
                },
            },
            backgroundImage: {
                'gradient-brand': 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
                'gradient-dark': 'linear-gradient(180deg, #04050f 0%, #080d1f 100%)',
                'gradient-card': 'linear-gradient(135deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.08) 100%)',
                'gradient-streak': 'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)',
                'gradient-gold': 'linear-gradient(135deg, #f59e0b 0%, #fcd34d 100%)',
                'gradient-diamond': 'linear-gradient(135deg, #22d3ee 0%, #a5f3fc 50%, #38bdf8 100%)',
            },
            boxShadow: {
                'glow-brand': '0 0 30px rgba(99, 102, 241, 0.4)',
                'glow-purple': '0 0 30px rgba(168, 85, 247, 0.4)',
                'glow-streak': '0 0 30px rgba(249, 115, 22, 0.4)',
                'glow-gold': '0 0 25px rgba(245, 158, 11, 0.5)',
                'card': '0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'glow-pulse': 'glowPulse 2s ease-in-out infinite',
                'streak-fire': 'streakFire 1.5s ease-in-out infinite alternate',
                'spin-slow': 'spin 8s linear infinite',
                'bounce-slow': 'bounce 3s infinite',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'scale-in': 'scaleIn 0.4s ease-out forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                glowPulse: {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
                    '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(99,102,241,0.6)' },
                },
                streakFire: {
                    '0%': { transform: 'scale(1) rotate(-2deg)' },
                    '100%': { transform: 'scale(1.05) rotate(2deg)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
