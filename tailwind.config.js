/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Cold Storage palette; values live in CSS variables in app/globals.css
      colors: {
        boss: {
          bg: 'rgb(var(--boss-bg) / <alpha-value>)',
          surface: 'rgb(var(--boss-surface) / <alpha-value>)',
          line: 'rgb(var(--boss-line) / <alpha-value>)',
          text: 'rgb(var(--boss-text) / <alpha-value>)',
          'text-bright': 'rgb(var(--boss-text-bright) / <alpha-value>)',
          muted: 'rgb(var(--boss-muted) / <alpha-value>)',
          accent: 'rgb(var(--boss-accent) / <alpha-value>)',
          'accent-press': 'rgb(var(--boss-accent-press) / <alpha-value>)',
          code: 'rgb(var(--boss-code) / <alpha-value>)',
          'on-accent': 'rgb(var(--boss-on-accent) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['var(--boss-font-display)'],
        body: ['var(--boss-font-body)'],
        ui: ['var(--boss-font-ui)'],
      },
    },
  },
  plugins: [],
}

