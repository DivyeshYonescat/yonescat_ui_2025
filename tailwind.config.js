/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "xsm":"480px",
        'sm': '640px',  // default small
        'md': '768px',  // default medium
        'lg': '1024px', // default large
        'xl': '1280px', // default extra large
        '2xl': '1536px', // default 2xl 
      },
    },
  },
  plugins: [],
}