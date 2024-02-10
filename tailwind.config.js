/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'whiteMain':'#bebebe',
        'blackMain':'#232428',
        'grayBtn':'#232428',
        'grayTxt':'#7F838D',
      },
      screens:{
        'tablet':'768px',
        'mobileL':'500px',
        'mobileXL':'600px',
      },
      gridTemplateColumns: {
        '1img': 'repeat(auto-fill, minmax(1fr, 500px))',
      },
    },
  },
  plugins: [],
}