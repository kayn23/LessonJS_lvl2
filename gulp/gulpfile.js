var gulp = require("gulp"),
  useref = require("gulp-useref"),
  gulpif = require("gulp-if"),
  minifyCss = require("gulp-clean-css"),
  clean = require("gulp-clean"),
  wiredep = require("gulp-wiredep");

//таск для добавления пакетов bower
gulp.task('bower', function () {
    gulp.src('app/index.html')
        .pipe(wiredep({
            directory: "bower_components"
        }))
        .pipe(gulp.dest('app/'));
    gulp.src('app/scss/*.scss')
        .pipe(wiredep({
            directory: 'bower_components'
        }))
        .pipe(gulp.dest('app/scss/'))
});


// таск для очистки продакшена
gulp.task('clean', function () {
    return gulp.src('dist/', { read: false })
        .pipe(clean());
});
//сборка картинок
gulp.task('img',['clean'], function () {
    return gulp.src('app/img/**/*.*')
        .pipe(gulp.dest('dist/img/'));
})
//Продакшен
gulp.task('html', ['img'], function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        // .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist/'));
});