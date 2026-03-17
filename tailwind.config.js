/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['clamp(2.25rem, 5vw, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
      },
      letterSpacing: {
        'luxury': '0.25em',
        'label': '0.2em',
      },
      colors: {
        accentBlue: '#39b6d9',
        accentNavy: '#163250',
        accentGreen: '#8ee0a6',
        softGreen: '#f3fdf6',
        softBlue: '#f8fcfd',
        cream: '#faf9f7',
        warmStone: '#e8e4e0',
        blueGray: '#e8eef2',
        sage: '#e8f0eb',
      },
      boxShadow: {
        'soft': '0 4px 24px -4px rgba(22, 50, 80, 0.08), 0 8px 16px -6px rgba(22, 50, 80, 0.04)',
        'soft-lg': '0 12px 40px -8px rgba(22, 50, 80, 0.1), 0 4px 16px -4px rgba(22, 50, 80, 0.04)',
        'card-hover': '0 20px 50px -12px rgba(22, 50, 80, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
