'use strict';
//const gulp = require('gulp');
//const gp = require('gulp-load-plugins')();

//global.$ = {
//    gulp: require('gulp'),
//    gp: require('gulp-load-plugins')()
//};
//
//// Module requirement
//require('./gulp/tasks/sass.js')();
//require('./gulp/tasks/pug.js')();
//
//// Task registration
//$.gulp.task('sass');
//$.gulp.task('pug');

global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create()
};

$.path.task.forEach(function(taskPath){
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'pug'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
