# Prototool2

A redux on the original [prototool](https://github.com/colonyamerican/prototool), this is a tool for quickly prototyping and compiling frontend web applications.

It's powered by [gulp](http://gulpjs.com/) and a lot of the file structure is inspired by [gulp-starter](https://github.com/greypants/gulp-starter).

# Usage

Just run `gulp`.

Out of the box, this supports:

- Less
- Coffeescript
- Handlebars

It's powered by [BrowserSync](http://www.browsersync.io/), has support for [Bower](http://bower.io) components and can easily be extended by adding new gulp tasks.

## Structure

All source files live in `src`. Various gulp tasks are used to build the project and the resulting output is put in the `build` path.

Most of the build is controlled via `gulp/config.coffee`, and looking in there should give you a good idea of how to build your own projects.