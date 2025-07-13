/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'japan-red': '#DC2626',
        'japan-gold': '#FCD34D',
        'sakura': '#FFB7C5',
        'bamboo': '#4ADE80',
        'ink': '#1F2937',
        'paper': '#F9FAFB',
      },
      fontFamily: {
        'japanese': ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
