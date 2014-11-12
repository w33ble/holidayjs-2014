gulp = require 'gulp'
build = require 'gulp-build'
reload = require('browser-sync').reload
config = require '../config'

gulp.task 'html', ->
  gulp.src config.html.src
  .pipe build config.site,
    layout: config.html.layout
  .pipe gulp.dest config.html.dest
