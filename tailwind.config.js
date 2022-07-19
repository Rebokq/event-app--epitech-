/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
 "./components/**/*.{js,ts,jsx,tsx}",
 './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/homeBg.jpg')",
      }
    },
 
  },
  plugins: [
    require('flowbite/plugin')
],
}
