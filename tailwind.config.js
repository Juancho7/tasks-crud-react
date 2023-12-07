/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-ribbon': {
          50: '#eef7ff',
          100: '#d8ecff',
          200: '#baddff',
          300: '#8bcaff',
          400: '#54acff',
          500: '#2c89ff',
          600: '#1667fa',
          700: '#1055f0',
          800: '#1342ba',
          900: '#163c92',
          950: '#122559'
        }

      }
    }
  },
  plugins: []
}
