/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50: '#f0f7f4',
          100: '#dcebe2',
          200: '#bcd7c9',
          300: '#8fbba7',
          400: '#5d9780',
          500: '#3d7d63',
          600: '#2c634f',
          700: '#244f40',
          800: '#1e4034',
          900: '#163025',
          950: '#0b1a13',
        },
        gold: {
          50: '#fbf8f0',
          100: '#f5ecd3',
          200: '#ebd8a6',
          300: '#ddbd73',
          400: '#d0a04b',
          500: '#c08436',
          600: '#a66a2c',
          700: '#854f26',
          800: '#6e4024',
          900: '#5d3722',
        },
        ink: {
          50: '#f6f7f8',
          100: '#eceef1',
          200: '#d5d9df',
          300: '#b0b7c2',
          400: '#8590a1',
          500: '#67738a',
          600: '#525c72',
          700: '#444c5d',
          800: '#3a414e',
          900: '#1f242c',
          950: '#11151b',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-pan': {
          '0%': { transform: 'scale(1.08) translateX(0)' },
          '100%': { transform: 'scale(1.12) translateX(-2%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'slow-pan': 'slow-pan 18s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
