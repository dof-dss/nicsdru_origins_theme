'use strict'

module.exports = (ctx) => ({
  map: ctx.file.dirname.includes('examples') ? false : {
    inline: false,
    annotation: true,
    sourcesContent: true
  },
  plugins: {
    'autoprefixer': {
      cascade: false,
    },
    'postcss-assets': {
      cachebuster: true,
      relative: true,
      loadPaths: ['images'],
      baseUrl: '/themes/custom/nicsdru_origins_theme/'
    }
  }
})
