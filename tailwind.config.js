/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#0b0f19',
          secondary: '#111827',
          card: '#131c31',
          'card-hover': '#192542',
          input: '#0e1526',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-card': 'rgba(148, 163, 184, 0.12)',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(59, 130, 246, 0.15)',
        'glow': '0 0 25px rgba(59, 130, 246, 0.25)',
        'glow-lg': '0 0 35px rgba(59, 130, 246, 0.35)',
      },
    },
  },
  plugins: [],
}
