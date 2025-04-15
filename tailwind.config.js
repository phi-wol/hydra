/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./node_modules/flowbite-react/**/*.js`
  ],
  mode: 'jit',
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ['BeautifulQueen', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
    require('flowbite/plugin'),
    require('flowbite-typography'),
  ],
}
