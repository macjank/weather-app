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

        bgPrimary: '#35597D',

        borderPrimary: '#797979',

        textPrimary: '#040501',
        textSecondary: '#fdfdfd',

        textTertiary: '#797979',
        textDisabled: '#797979',
      },
    },
  },
  plugins: [],
};
