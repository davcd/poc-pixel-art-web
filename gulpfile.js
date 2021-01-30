const { src, dest, watch, series } = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')

const bs = require('browser-sync').create()

function css () {
  return src('./assets/styles.scss')
    .pipe(sass())
    .pipe(dest('./public'))
    .pipe(bs.stream())
}

function html () {
  return src('./assets/template.pug')
    .pipe(pug())
    .pipe(dest('./public'))
}

function serve () {
  bs.init({
    server: {
      baseDir: './public',
      index: 'template.html'
    },
    ui: false,
    open: false
  })

  watch('./assets/**/*.scss', css)
  watch(['./assets/**/*.pug', './resume.json'], html)
  bs.watch('./public/*.html').on('change', bs.reload)
}

exports.css = css
exports.default = series(css, html, serve)
