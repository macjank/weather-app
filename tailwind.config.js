/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        error: '#E31925',
        errorBg: '#FEF0F1',

        success: '#23AC29',
        successBg: '#E2EFDA',

        bgGradient1: '#D6EAFB',
        bgGradient2: '#E8F4FE',
        bgSolidDark: '#758fa3',
        bgSolidLight: '#cdd9e4',

        borderPrimary: '#4a677d',

        textDark: '#040501',
        textPrimary: '#0D273A',
        textSecondary: '#fdfdfd',
        textTertiary: '#797979',
        textDisabled: '#797979',
      },
    },
  },
  plugins: [],
};
