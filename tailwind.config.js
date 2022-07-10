/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors : {
        'primary-dark': '#18191a',
        'primary-white': '#f1f1f1',
        'primary-blue': '#2563eb',
        'primary-green': '#059669',
        'primary-grey-200': '#333333',
        'primary-grey-400': '#232626',
        'primary-grey-50': '#8ea3af',
        'light-grey-100': '#f0f2f5',
        'ligth-greyBlue': '#e5edff',
        'light-grey-150': '#f0f2f5',
        'light-black': '#2d2d2d',
        'light-blue': '#2563eb',
        'light-grey-300': '#6b7280',
        'color-red-pro': '#ec5252',
        'color-blue-pro': '#4761ff',
        'color-green-pro': '#38b653',
      },
      screens : {
        'a_lg' : '1025px',
        'a_md' : '767px',
        'a_sm' : {'max': '800px'},
        'b_sm' : {'max': '415px'},
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  // important : true,
}
