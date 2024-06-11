module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-color': '#ED1D24', // Replace with your custom color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};