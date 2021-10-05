module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'earth': '#D06A47',
        'blue': {
         default: '#75B8CE',
         light: '#75B8CE'
        },
        yellow: '#DAB45B',
        black: '#000000',
        white: '#eff6fb'
      },
      spacing: {
        '1/6': '16.6666666667%',
        '1/4': '25%',
        'h-screen': '100vh',
      },
      cursor:{
        'none': 'none'
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
        tighter: 0.72
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
        '9xl': '12vw',
        '10xl': '20vw',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      fontFamily: {
        'serif': ['Libre Baskerville','serif'],
        'display-head': ['thunder', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
