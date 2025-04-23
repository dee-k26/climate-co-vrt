/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6A9F7D',
        secondary: '#E3E4D8',
        herobg: 'white',
        text: '#2D2D2D',
        secondaryText: '#4A4A4A',
        accent: '#8A9A5B',
        hover: '#7A874F',
      },
    },
  },
  plugins: [],
}
