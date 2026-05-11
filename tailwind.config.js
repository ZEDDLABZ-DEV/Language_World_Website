/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#4F8EF7',
          'blue-deep': '#2F6FE0',
          purple: '#8B5CF6',
          'purple-deep': '#6D28D9',
          pink: '#F472B6',
          mint: '#A7F3D0',
          peach: '#FED7AA',
          sky: '#BAE6FD',
          lavender: '#DDD6FE',
        },
        surface: {
          50: '#FAFBFE',
          100: '#F4F6FB',
          200: '#E8ECF4',
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          '"Inter"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        display: [
          '"Plus Jakarta Sans"',
          '"Inter"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(79, 142, 247, 0.15)',
        'card': '0 8px 30px -8px rgba(99, 102, 241, 0.12)',
        'glow': '0 20px 60px -20px rgba(139, 92, 246, 0.45)',
        'glow-blue': '0 20px 60px -20px rgba(79, 142, 247, 0.55)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #4F8EF7 0%, #8B5CF6 100%)',
        'gradient-brand-soft': 'linear-gradient(135deg, rgba(79,142,247,0.12) 0%, rgba(139,92,246,0.12) 100%)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'mesh': "radial-gradient(at 20% 10%, rgba(79,142,247,0.18) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139,92,246,0.20) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(244,114,182,0.10) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(186,230,253,0.30) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(221,214,254,0.25) 0px, transparent 50%), radial-gradient(at 80% 100%, rgba(254,215,170,0.15) 0px, transparent 50%)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'blob': 'blob 18s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
};
