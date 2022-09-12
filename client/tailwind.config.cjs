/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xd: { mid: "257px", max: "383px" },
        // => @media (min-width: 257px and max-width: 383px) { ... }

        xm: { mid: "384px", max: "511px" },
        // => @media (min-width: 384px and max-width: 511px) { ... }

        xs: { mid: "512px",  max: "639px" },
        // => @media (min-width: 512px and max-width: 639px) { ... }

        sm: { min: "640px", max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
// 
        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'tee': {
          100: '#A8A8A8',
          200: '#440376',
          300: '#440376',
          400: '#212020',
          500: '#626060',
          600: '#F9F0FF',
          700: '#E1CDE1',
          800: '#155e75',
          900: '#164e63',
        },
        // ...
      },
      fontFamily: {
        'pop': [ "Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
};
