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

        inputBorder: '#797979',

        textPrimary: '#fdfdfd',
        textSecondary: '#040501',
        textDisabled: '#797979',
      },
    },
  },
  plugins: [],
};
