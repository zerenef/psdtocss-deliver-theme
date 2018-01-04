let gulp = require('gulp');
let pug = require('gulp-pug');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let livereload = require('gulp-livereload');


//js concat
gulp.task('javascript', function() {
  return gulp.src('src/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('app/scripts'));
});

//Sass-minify
gulp.task('sass', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass({
		outputStyle: 'compressed'
	}))
    .pipe(gulp.dest('app/styles'))
    .pipe(livereload());
});

//Pug
gulp.task('pug', function buildHTML() {
  return gulp.src('src/**/*.pug')
  .pipe(pug({
		pretty:true 
  }))
  .pipe(gulp.dest('app/'));
});


//watch
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/**/*.pug', ['pug']);
  gulp.watch('src/**/*.js', ['javascript']);
});

//default
gulp.task('default', ['sass','pug','javascript']);