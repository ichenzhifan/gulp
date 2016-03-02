var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gulifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');

gulp.task('concat', function() {
    return gulp.src('./app/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});

// 设置依赖任务: 'concat' .
gulp.task('uglify', ['concat'], function() {
    return gulp.src('./dist/*.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/'));
});

// 设置依赖任务: 'concat' .
gulp.task('uglifycss', function() {
    return gulp.src('./css/**/*.css')
        .pipe(gulifycss({
            'maxLineLen': 80,
            'uglyComments': true
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', ['uglify', 'uglifycss']);
