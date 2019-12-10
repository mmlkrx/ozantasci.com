const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './site/*.njk',
    './site/js/*.js' // don't forget classes only applied with JS
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
