module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active', 'hover', 'group-hover'],
      margin: ['hover'],
      padding: ['hover'],
      borderWidth: ['hover', 'focus'],
      transitionProperty: ['hover', 'focus'],
      animation: ['motion-reduce'],
      textColor: ['active'],
      gradientColorStops: ['active', 'group-hover'],
    },
  },
  plugins: [],
};
