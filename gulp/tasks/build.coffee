gulp = require 'gulp'
config = require '../config'

gulp.task 'build', [
  'less'
  'html'
  'copy_bower'
]