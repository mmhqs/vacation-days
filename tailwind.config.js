/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esta linha garante que ele procure em todos os arquivos React na pasta 'src'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}