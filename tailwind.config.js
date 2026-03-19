/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#000000',
        violetGlow: '#8b5cf6',
        neonBlue: '#38bdf8',
        softWhite: '#f8fafc',
      },
      boxShadow: {
        glow: '0 0 25px rgba(139, 92, 246, 0.35)',
        blueGlow: '0 0 25px rgba(56, 189, 248, 0.35)',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.16), transparent 45%), radial-gradient(circle at bottom, rgba(139, 92, 246, 0.16), transparent 45%)',
      },
    },
  },
  plugins: [],
}
