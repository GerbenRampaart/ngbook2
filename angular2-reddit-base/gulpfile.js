/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/


var gulp = require('gulp');
var ts = require('gulp-typescript');
//var merge = require('merge');
var fs = require('fs');
//var del = require('del');
var path = require('path');

eval('var project = ' + fs.readFileSync('./project.json'));

var tsProject = ts.createProject('./wwwroot/tsconfig.json');

var paths = {
    npm: './node_modules/',
    //tsSource: './wwwroot/app/**/*.ts',
    jsVendors: project.webroot + '/resources/vendor/js',
    cssVendors: project.webroot + '/resources/vendor/css'
};

console.info(paths.jsVendors);
/*
gulp.task('setup-vendors', function () {
    gulp.src([
      'node_modules/angular2/bundles/js',
      'node_modules/angular2/bundles/angular2.*.js*',
      'node_modules/angular2/bundles/http.*.js*',
      'node_modules/angular2/bundles/router.*.js*',
      'node_modules/es6-shim/es6-shim.js*',
      'node_modules/systemjs/dist/*.*',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js'
    ]).pipe(gulp.dest(paths.jsVendors));

    gulp.src([
        'node_modules/semantic-ui/dist/semantic.css'
    ]).pipe(gulp.dest(paths.cssVendors))
});

gulp.task('build-spa', ['setup-vendors']);
*/