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
        primarybg: '#18181B',    // Dark base background (e.g., deep gray-black from image)
        primarybg1: '#272729ff',    // Dark base background (e.g., deep gray-black from image)
        primarytext: '#F8F8FF',  // Light text (e.g., ghost white for readability on dark bg)
        secondarytext: '#FFE4B5',// Warm secondary text (e.g., beige for contrast)
        secondarybg1: '#FF6F61', // Vibrant red (e.g., for cards or highlights)
        secondarybg2: '#B2F7EF', // Light teal (e.g., for alternate card backgrounds)
        secondarybg3: '#B5FFB8', // Bright green (e.g., for eco-friendly tags)
        secondarybg4: '#FF6F61', // Repeated vibrant red (e.g., consistent accent)
        hoverbg: '#FFB347',      // Warm orange for hover states
        logo: '#FFB347',         // Orange for logo/branding
        bcolor: '#8B4513',       // Border color (e.g., brown to complement warm tones)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        popins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.625rem', // 10px
        xs: '0.75rem',  // 12px
        sm: '0.875rem', // 14px
        base: '1rem',   // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem',  // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem',  // 48px
        '6xl': '3.75rem', // 60px
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