/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        logo: '#d4422a',
        primary: '#2d4a2b', 
        // primary: for header navigation and primary text
        secondary: '#6b4423',
        // for secondary text and links
        accent: '#d4422a',
        // for CTA buttons, Highlights, featured element
        background: '#f8f5f0',
        // for main and card background
        idleb: '#8b9a79',
        // for inactive state and borders
        support: '#49782d',
        // for categorization badges and tags

      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        popins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}