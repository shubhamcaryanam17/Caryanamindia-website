import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#dce4f0',
          200: '#b8c9de',
          300: '#8aa3c4',
          400: '#5c7da9',
          500: '#3d5f8f',
          600: '#2a4670',
          700: '#1e3558',
          800: '#152844',
          900: '#0c1a33',
          950: '#071222',
        },
        primary: '#1e3558',
        secondary: '#3d5f8f',
        accent: '#5c7da9',
      },
      boxShadow: {
        glow: '0 30px 80px rgba(30, 58, 95, 0.18)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at top right, rgba(61,95,143,0.18), transparent 30%), radial-gradient(circle at 20% 20%, rgba(30,58,95,0.12), transparent 25%)',
      },
    },
  },
  plugins: [],
}
