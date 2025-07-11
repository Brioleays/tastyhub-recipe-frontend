/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'sm': '0 1px 1px #d4412a',
        'lg': '0 4px 14px #d4412a',
        
      },
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
        hover: '#ff8565' ,
        // for hoverstate, ratings and warm accent

      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        popins: ['Poppins', 'sans-serif'],
      },
      spacing: {
        '25': '6.5rem', // 104px
        '30': '7.5rem', // 120px
        '40': '10rem', // 160px
        '45': '11.125rem', // 180px
        '50': '12.5rem', // 200px
        '60': '12.5rem', // 200px
        '68': '15.5rem', // 248px
        '70': '17.5rem', // 280px
        '80': '20rem', // 320px
        '128': '32rem', // 512px
        '130': '34rem',
        '144': '36rem', // 576px
        '160': '40rem', // 640px
        '180': '45rem', // 720px
        '200': '50rem', // 800px
        '220': '55rem', // 880px
        '240': '60rem', // 960px
        '260': '65rem', // 1040px
      },
    },
  },
  plugins: [],
}