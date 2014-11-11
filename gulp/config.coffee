path = require 'path'
dest = path.resolve __dirname, '../build'
src = path.resolve __dirname, '../src'

module.exports =
  build:
    path: dest
  less:
    src: src + '/less/*.less'
    watch: src + '/less/**/*.less'
