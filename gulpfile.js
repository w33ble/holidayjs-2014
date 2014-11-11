require('coffee-script/register');
var rDir = require('require-dir');

rDir('./gulp/tasks', { recurse: true });
