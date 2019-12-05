const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './site/index.html',
    './site/work.html',
    './site/js/index.js', // don't forget classes only applied with JS
    './site/js/modal.js' // don't forget classes only applied with JS
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
