browserSync = require 'browser-sync'
gulp = require 'gulp'
config = require '../config'

gulp.task 'browser_sync', ['build'], ->
  browserSync config.browserSync

gulp.task 'bs-reload', ->
  browserSync.reload()

gulp.task 'bs-reload-stream', ->
  browserSync.reload stream: true