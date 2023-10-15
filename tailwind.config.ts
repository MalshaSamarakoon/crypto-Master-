


// tailwind.config.js

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans'],
      },
      colors: {
        primary: {
          50: 'rgb(var(--tw-color-primary-50))',
          100: 'rgb(var(--tw-color-primary-100))',
          // ... Define other color shades here
        },
        dark: '#222222',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
