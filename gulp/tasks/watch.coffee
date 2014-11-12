gulp = require 'gulp'
watch = require 'gulp-watch'
config = require '../config'

gulp.task 'watch', ->
  gulp.watch config.less.watch, ['less', 'bs-reload-stream']
  gulp.watch config.html.watch, ['html', 'bs-reload']
  gulp.watch config.bower.watch, ['copy_bower']