/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  darkMode:'class',
  theme: {
    extend: {},
    // colors:{
    //   'green' : '#63C97C',
    //   'yellow' : '#6F6FED',
    //   'orange' : '#68BAC',
    //   'pink' : '#E96146',
    //   'purple' : '#DA354B',
    //   'torq' : '#F5C344',
    // },
  },
  plugins: [],
}
