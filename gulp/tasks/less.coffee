gulp = require 'gulp'
less = require 'gulp-less'
cache = require 'gulp-cached'
sourcemaps = require 'gulp-sourcemaps'
reload = require('browser-sync').reload
config = require '../config'

gulp.task 'less', ->
  if config.site.env is 'development'
    gulp.src config.less.src
    .pipe cache 'less_files'
    .pipe sourcemaps.init()
    .pipe less()
    .pipe sourcemaps.write()
    .pipe gulp.dest config.less.dest
  else
    gulp.src config.less.src
    .pipe cache 'less_files'
    .pipe less()
    .pipe gulp.dest config.less.dest
