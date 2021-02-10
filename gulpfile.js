const gulpBrotli = require('gulp-brotli')
const gulp = require('gulp')
const zlib = require('zlib')
const htmlmin = require('gulp-html-minifier')
 
function compressBrotli() {
  return gulp
    .src(`./dist/index.html`)
    .pipe(gulpBrotli({
      // the options are documented at https://nodejs.org/docs/latest-v10.x/api/zlib.html#zlib_class_brotlioptions 
      params: {
        // brotli parameters are documented at https://nodejs.org/docs/latest-v10.x/api/zlib.html#zlib_brotli_constants
        [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY,
      },
    }))
    .pipe(gulp.dest(`./dist`))
}

function minifyHtml() {
    return gulp.src(`./index.html`)
            .pipe(htmlmin({
                removeAttributeQuotes: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                useShortDoctype: true,
            }))
            .pipe(gulp.dest(`./dist`))
}

exports.minifyHtml = minifyHtml
exports.compressBrotli = compressBrotli

exports.build = gulp.series(minifyHtml, compressBrotli)
