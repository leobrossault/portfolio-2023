/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const themes = require('./const/themes.ts')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ['Khorla', 'Arial']
      },
      colors: themes
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': angle => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`
          })
        },
        {
          values: Object.assign(theme('bgGradientDeg', {}), {
            10: '10deg'
          })
        }
      )
    })
  ]
}
