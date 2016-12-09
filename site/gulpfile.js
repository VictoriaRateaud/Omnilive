// Requis
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = './'; // dossier de travail
var destination = './'; // dossier à livrer

// Tâche "build" = LESS + autoprefixer + CSScomb + beautify (source -> destination)
gulp.task('css', function () {
  return gulp.src(source + 'less/stylesheet.less')
    .pipe(plugins.less())
    .pipe(plugins.csscomb())
    // .pipe(plugins.cssbeautify({indent: '  '}))
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(destination + 'css/'))
    .pipe(browserSync.stream());
});

gulp.task('css-watch', ['css'], browserSync.reload);

gulp.task('serve', ['css'], function () {
    browserSync.init({
        server: { baseDir: "./" }
    });

    gulp.watch("less/*.less", ['css-watch']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Tâche "build"
gulp.task('build', ['css']);

// Tâche par défaut
gulp.task('default', ['serve']);