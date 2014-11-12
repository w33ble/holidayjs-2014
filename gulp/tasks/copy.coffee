gulp = require 'gulp'
mainBowerFiles = require 'main-bower-files'
filter = require 'gulp-filter'
config = require '../config'

gulp.task 'copy_bower', ->
  gulp.src mainBowerFiles
    paths:
      bowerDirectory: config.bower.src
      bowerJson: config.bower.json
  .pipe filter config.bower.files
  .pipe gulp.dest config.bower.dest