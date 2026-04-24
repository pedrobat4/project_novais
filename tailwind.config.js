/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f2f5f1',
          100: '#dce6da',
          200: '#b8ccb4',
          300: '#8fac8a',
          400: '#6b9065',
          500: '#5B7458',
          600: '#486445',
          700: '#3a5038',
          800: '#2c3d2b',
          900: '#1a2419',
          950: '#0e1410',
        },
        gold: {
          300: '#e8d5a3',
          400: '#d4b878',
          500: '#c4a35a',
          600: '#a8873d',
        },
      },
      fontFamily: {
        sans:    ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
