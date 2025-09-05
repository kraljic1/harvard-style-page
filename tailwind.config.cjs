/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vintage-green': '#6B7350',
        'vintage-beige': '#F0F0E0',
        'vintage-sidebar': '#FFFFE0',
        'brand-red': '#A51C30',
      },
      fontFamily: {
        'sans': ['Arial', 'Helvetica', 'sans-serif'],
        'serif': ['Times New Roman', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}
