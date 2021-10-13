module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#f26f55',
      secondary: '#cbd5e0',
      danger: '#e3342f'
    }),
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
