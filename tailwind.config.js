/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#AC87C5',
        'secondary': '#53415F',
        'darkPurple': '#756AB6',
      },
    },
  },
  plugins: [],
}

