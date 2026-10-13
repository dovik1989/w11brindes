/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        w11: {
          dark: '#070A10',
          darker: '#04060A',
          card: '#0D1322',
          cardHover: '#131C32',
          border: 'rgba(255, 255, 255, 0.08)',
          blue: {
            DEFAULT: '#1657D9',
            light: '#2563EB',
            glow: '#1D63FF',
            dark: '#0E3A94',
          },
          orange: {
            DEFAULT: '#FF6B00',
            light: '#F97316',
            hover: '#EA580C',
            glow: '#FF7A1A',
            dark: '#C2410C',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 75% 30%, rgba(22, 87, 217, 0.18) 0%, rgba(255, 107, 0, 0.12) 35%, rgba(7, 10, 16, 0) 70%)',
        'orange-gradient': 'linear-gradient(135deg, #FF6B00 0%, #EA580C 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(20, 28, 48, 0.6) 0%, rgba(13, 19, 34, 0.8) 100%)',
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(255, 107, 0, 0.35)',
        'glow-blue': '0 0 35px -5px rgba(22, 87, 217, 0.35)',
      }
    },
  },
  plugins: [],
}

