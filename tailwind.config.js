/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    extend: {
      transformTranslate: {
        translateModal: 'translate(-50%, -50%)',
      },
      gridTemplateColumns: {
        '24rem-1fr-1.2fr': '24rem 1fr 1.2fr',
      },

      fontFamily: {
        satisfy: 'Satisfy, cursive',
      },
    },
  },
  plugins: [],
};
