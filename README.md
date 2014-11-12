# Prototool2

A redux on the original [prototool](https://github.com/colonyamerican/prototool), this is a tool for quickly prototyping and compiling frontend web applications.

It's powered by [gulp](http://gulpjs.com/) and a lot of the file structure is inspired by [gulp-starter](https://github.com/greypants/gulp-starter).

Out of the box, this supports:

- Less
- Coffeescript
- Handlebars
- JS (copy)

It's powered by [BrowserSync](http://www.browsersync.io/) so you get live reloading and css injection automatically.

It also has support for selectively copying [Bower](http://bower.io) components (see below for details) and can easily be extended by adding new gulp tasks.

# Usage

`npm install` and `bower install`.

Then, just run `gulp`.

Use `gulp build` if you want to compile everything but don't want to start the server.

## Structure

All source files live in `src`. Various gulp tasks are used to build the project and the resulting output is put in the `build` path.

The build is primarily controlled via `gulp/config.coffee`, and looking in there should give you a good idea of how to build your own projects.

## Bower components

Bower components are selectively copied to `build/vendor`. You can add new files for copying by editing the list in `gulp/config.coffee`. This uses [main-bower-files](https://github.com/ck86/main-bower-files) to find the *main* component file(s) - see their docs for additional help.

## Javascript and Coffeescript

Coffeescript files are transpiled and copied to their respective paths in `build/js`.

In addition to supporting coffeescript, you can also just write vanilla javascript in `src/js` and it'll be copied to `build/js` directly.

Be careful about naming conflicts between coffeescript and javascript files as one will silently clobber the other.