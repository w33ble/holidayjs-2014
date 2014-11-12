gulp = require 'gulp'
config = require '../config'

gulp.task 'build', [
  'coffee'
  'html'
  'less'
  'copy_js'
  'copy_bower'
]