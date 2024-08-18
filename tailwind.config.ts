module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      fontFamily: {
        primary: ['Inter', 'sans'],
      },
      colors: {
        primary: {
          50: 'rgb(var(--tw-color-primary-50))',
          100: 'rgb(var(--tw-color-primary-100))',
        },
        dark: '#ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
