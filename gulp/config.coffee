fs = require 'fs'
path = require 'path'
dest = path.resolve __dirname, '../build'
src = path.resolve __dirname, '../src'
env = process.env.ENVIRONMENT || process.env.NODE_ENV || 'development'

module.exports =
  browserSync:
    server:
      baseDir: dest
  build:
    path: dest
  bower:
    json: path.resolve __dirname, '../bower.json'
    src: path.resolve __dirname, '../bower_components'
    files: [
      'modernizr.js'
    ]
    dest: dest + '/vendor'
  less:
    src: src + '/less/*.less'
    dest: dest + '/css'
    watch: src + '/less/**/*.less'
  site:
    root: path.resolve __dirname, '../'
    title: 'My Awesome Site'
    description: 'All the things'
    env: env