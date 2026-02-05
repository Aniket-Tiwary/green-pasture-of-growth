/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,css}"],
  theme: {
    extend: {
      colors: {
        // Greens
        'forest': '#228B22',
        'meadow': '#7CFC00',
        'sage': '#9DC183',
        'grass': '#4A7C23',
        'dark-green': '#2D5016',
        // Yellows
        'sunflower': '#FFDA03',
        'cream': '#FFFDD0',
        'golden': '#DAA520',
        // Blues
        'sky': '#87CEEB',
        'soft-blue': '#B0E0E6',
        'deep-sky': '#5BB3D0',
        // Earth tones
        'wood': '#8B4513',
        'warm-brown': '#A0522D',
        'light-wood': '#DEB887',
        'bark': '#6B4423',
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'Georgia', 'serif'],
        'body': ['Outfit', 'system-ui', 'sans-serif'],
      },
      animation: {
        'sway': 'sway 4s ease-in-out infinite',
        'sway-delayed': 'sway 4s ease-in-out infinite 0.5s',
        'sway-slow': 'sway 5s ease-in-out infinite 1s',
        'bounce-soft': 'bounce-soft 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'confetti-fall': 'confetti-fall 3s linear forwards',
        'plaque-in': 'plaque-in 0.4s ease-out forwards',
        'plaque-out': 'plaque-out 0.3s ease-in forwards',
      },
      keyframes: {
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'bounce-soft': {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.15)' },
          '50%': { transform: 'scale(0.95)' },
          '70%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'confetti-fall': {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: '0' },
        },
        'plaque-in': {
          '0%': { transform: 'scale(0.8) translateY(20px)', opacity: '0' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
        'plaque-out': {
          '0%': { transform: 'scale(1) translateY(0)', opacity: '1' },
          '100%': { transform: 'scale(0.8) translateY(20px)', opacity: '0' },
        },
      },
      backgroundImage: {
        'wood-grain': 'linear-gradient(90deg, #8B4513 0%, #A0522D 20%, #8B4513 40%, #A0522D 60%, #8B4513 80%, #A0522D 100%)',
      },
    },
  },
  plugins: [],
}
