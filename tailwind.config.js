/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#060C2C',
        'background-secondary': '#F4EFF4',
        'background-variant': '#E6E1E514',
        'background-outline': '#CAC4D0',
        'text-primary': '#E7E0EC',
        'text-outline': '#1D192B',
        'text-secondary': '#6750A4'
      }
    },
  },
  important: true,
  plugins: [],
}