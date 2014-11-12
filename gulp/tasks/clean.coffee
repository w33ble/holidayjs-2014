gulp = require 'gulp'
del = require 'del'
config = require '../config'

gulp.task 'clean_build', (cb) ->
  del [config.build.path], cb