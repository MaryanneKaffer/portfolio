import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        twinkle: 'twinkle 2s infinite ease-in-out',

      },
      fontFamily: {
        mainFont: ['mainFont', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
