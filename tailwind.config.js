/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': '60px',
        'h2': '48px',
        'h3': '36px',
        'body': '36px',
      },
      fontWeight: {
        'heavy': '800',
      },
    },
  },
  plugins: [],
}
