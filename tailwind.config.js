/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design system colors from documentation
        'sakura-pink': '#f7c6c7',
        'indigo': '#264653',
        'gold': '#e9c46a',
        'tokyo-red': '#f94144',
        'osaka-orange': '#f3722c',
        'kyoto-blue': '#577590',
        'charcoal-gray': '#2c2c2c',
        'light-gray': '#f8f9fa',
      },
      fontFamily: {
        'primary': ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
    },
  },
  plugins: [],
}