const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './public/index.html',
    './public/work.html',
    './public/js/index.js', // don't forget classes only applied with JS
    './public/js/modal.js' // don't forget classes only applied with JS
  ],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
  ]
}
