gulp = require 'gulp'
less = require 'gulp-less'
config = require '../config'

gulp.task 'less', ->
  gulp.src config.less.src
  .pipe less()
  .pipe gulp.dest config.build.path + '/css'
