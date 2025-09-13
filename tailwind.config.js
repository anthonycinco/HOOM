/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          red: '#7065f0',
          dark: '#222222',
          gray: {
            50: '#F7F7F7',
            100: '#DDDDDD',
            200: '#B0B0B0',
            300: '#717171',
            400: '#484848',
            500: '#222222',
          },
        },
        primary: {
          50: '#f0f0ff',
          100: '#e0e0ff',
          200: '#c7c7ff',
          300: '#a5a5ff',
          400: '#7c7cff',
          500: '#7065f0',
          600: '#5c52d9',
          700: '#4f45c2',
          800: '#4339a6',
          900: '#3a3085',
        },
        secondary: '#222222',
        accent: '#7065f0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'ripple': 'ripple 0.6s linear',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ripple: {
          'to': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
