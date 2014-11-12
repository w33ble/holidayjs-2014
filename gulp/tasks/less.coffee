gulp = require 'gulp'
less = require 'gulp-less'
cache = require 'gulp-changed'
sourcemaps = require 'gulp-sourcemaps'
config = require '../config'

gulp.task 'less', ->
  gulp.src config.less.src
  .pipe cache config.build.path + '/css'
  .pipe sourcemaps.init()
  .pipe less()
  .pipe sourcemaps.write()
  .pipe gulp.dest config.build.path + '/css'
