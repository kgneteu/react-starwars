module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
    extend: {
      colors: {
        swYellow: '#FFE81F',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'spin-slow': 'spin 3s ease-out both  infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'delay-appear': 'appear 1s ease-in 500ms 1 forwards',
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    }
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
