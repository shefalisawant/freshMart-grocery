/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white':'#ffffff',
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'pale-green': '#C5EBAA',
      'dark-green':'#12372A',
      'olive-green':'#416D19',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      display:['Madimi One','sans-serif'],
      mont:['Montserrat Alternates','sans-serif']
    },
    extend: {
      spacing: {
        '2':'16px',
        '3':'24px',
        '4':'32px',
        '8':'64px',
        '10':'80px',
        '12':'96px',
        '28':'224px',
        '50':'400px',
        '138':'550px'
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
plugins: [],
}

