/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(139, 92, 246, 0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(139, 92, 246, 0.18), transparent 35%), radial-gradient(circle at bottom, rgba(15, 23, 42, 0.75), transparent 40%)',
      },
    },
  },
  plugins: [],
};
