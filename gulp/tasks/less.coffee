gulp = require 'gulp'
less = require 'gulp-less'
cache = require 'gulp-cached'
sourcemaps = require 'gulp-sourcemaps'
reload = require('browser-sync').reload
config = require '../config'

gulp.task 'less', ->
  gulp.src config.less.src
  .pipe cache 'less_files'
  .pipe sourcemaps.init()
  .pipe less()
  .pipe sourcemaps.write()
  .pipe gulp.dest config.build.path + '/css'
  .pipe reload stream:true