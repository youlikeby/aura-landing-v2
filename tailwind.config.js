/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        card: {
          DEFAULT: '#15151C',
          light: '#1B1B25',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#9A9AA5',
          muted: '#6E6E7B',
        },
        'accent-lime': '#C8FF3D',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        pill: '980px',
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 58, 237, 0.3)',
      },
    },
  },
  plugins: [],
}
