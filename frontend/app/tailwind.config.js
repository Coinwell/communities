module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      secondary: '#cbd5e0',
      danger: '#e3342f',
      orange: {
        light: '#f26f55',
        DEFAULT: '#eb5600',
        dark: '#eb5600'
      }
    }),
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      48: '12rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      96: '24rem',
      128: '30rem'
    },
    extend: {
      translate: ['group-hover']
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
