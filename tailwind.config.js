module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
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
      animation: ['motion-reduce', 'hover', 'focus', 'group-hover'],
      textColor: ['active'],
      gradientColorStops: ['active', 'group-hover'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      inset: ['checked'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
