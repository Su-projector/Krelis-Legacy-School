import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Primary: Deep Navy Blue
                navy: {
                    50: '#e6eaf0',
                    100: '#b3c0d4',
                    200: '#8096b8',
                    300: '#4d6c9c',
                    400: '#264a80',
                    500: '#002147', // Main primary color
                    600: '#001d3f',
                    700: '#001837',
                    800: '#00132f',
                    900: '#000d20',
                },
                // Accent: Orange
                orange: {
                    50: '#fef6e6',
                    100: '#fde4b3',
                    200: '#fbd280',
                    300: '#f9c04d',
                    400: '#f7b226',
                    500: '#F29F05', // Main accent color
                    600: '#d98f04',
                    700: '#bf7e04',
                    800: '#a66d03',
                    900: '#8c5c02',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(135deg, rgba(0,33,71,0.9) 0%, rgba(0,33,71,0.7) 100%)',
            },
        },
    },
    plugins: [],
};

export default config;
