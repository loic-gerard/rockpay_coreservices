// Gulp
const gulp = require('gulp');

// Other plugins
const apidoc = require('gulp-apidoc');
const argv   = require('yargs').argv;


// Documentation
gulp.task('doc', function() {
    return gendoc();
});

function gendoc() {
    return apidoc({
        src:  'v1/',
        dest: 'doc/v1/',
        includeFilters: [ ".*\\.php$" ]
    }, function() {});
}