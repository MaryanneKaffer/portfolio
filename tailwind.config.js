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
      screens: {
        lgxl: '1450px',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'spin-slower': 'spin 30s linear infinite',
        'spin-slower-reverse': 'spin 30s linear infinite reverse', 
      },
      fontFamily: {
        mainFont: ['mainFont', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
