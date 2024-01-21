/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        black_100:'#101010',
        black_200:'#1e1e1e',
        accent_100:'#006fff',
        white_100:'#ffffff',
        white_200:'#9e9e9e',
      },
    },
  },
  plugins: [],
}