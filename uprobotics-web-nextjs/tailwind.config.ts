import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/contexts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4285F4',
          hover: '#1A6FE8',
          light: '#7BAFF8',
        },
        accent: {
          DEFAULT: '#FBBC05',
          hover: '#F9AB00',
          light: '#FDD663',
        },
        success: {
          DEFAULT: '#34A853',
          light: '#5DBF78',
        },
        danger: {
          DEFAULT: '#EA4335',
          light: '#F28B82',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
