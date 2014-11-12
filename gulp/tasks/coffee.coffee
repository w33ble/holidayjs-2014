gulp = require 'gulp'
coffee = require 'gulp-coffee'
cache = require 'gulp-cached'
sourcemaps = require 'gulp-sourcemaps'
config = require '../config'

gulp.task 'coffee', ->
  if config.site.env is 'development'
    gulp.src config.coffee.src
    .pipe cache 'coffee_files'
    .pipe sourcemaps.init()
    .pipe coffee()
    .pipe sourcemaps.write()
    .pipe gulp.dest config.coffee.dest
  else
    gulp.src config.coffee.src
    .pipe cache 'coffee_files'
    .pipe coffee()
    .pipe gulp.dest config.coffee.dest
