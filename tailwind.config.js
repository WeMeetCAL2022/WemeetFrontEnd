/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
        colors: {
          'violet': '#7209B7',
          'rose': '#F72585',
          'blue': '#3A0CA3',
          'light-blue': '#4361EE',
          'black': '#252525',
        }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
