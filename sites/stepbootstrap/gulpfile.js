const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rigger = require('gulp-rigger'); //работа с инклюдами в html и j
const plumber = require("gulp-plumber");
const uglify = require('gulp-uglify'); //минификация js
const concat = require('gulp-concat');
const jshint = require("gulp-jshint"); //отслеживание ошибкок в js
const jsMin = require("gulp-js-minify");
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const spritesmith = require("gulp.spritesmith");
const rename = require("gulp-rename");
const sourcemaps = require('gulp-sourcemaps');

const paths = {
    html: {
        src: 'src/index.html',
        dest: 'dist/'
    },
    styles: {
        src: 'src/scss/*.scss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/js/*.js',
        dest: 'dist/js/'
    },
    img: {
        src: 'src/img/*.*',
        dest: 'dist/img/'
    }
};

function browserSync() {
    browsersync.init({
        server: {
            baseDir: "./dist/"
        },
        port: 3000,
        browser: "google chrome"
    });
}


function cleanFiles() {
    return gulp.src('./dist/*', {read: false})
        .pipe(clean());
}


function cacheClean() {
    cache.clearAll();
}


function html() {
    return gulp.src(paths.html.src)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browsersync.stream());
}


function css() {
    return gulp.src(paths.styles.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({cascade: false}))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browsersync.stream());
}


function js() {
    return gulp.src(paths.scripts.src)
        .pipe(plumber())
        .pipe(jshint())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(jsMin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browsersync.stream());
}

function img() {
    return gulp.src('./src/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img/'))
}


function watchFiles() {
    gulp.watch('src/**/*.html', html);
    gulp.watch('src/scss/**/*', css);
    gulp.watch('src/js/**/*', js);
    gulp.watch('src/img/**/*', img);
}


gulp.task('build', gulp.series(cleanFiles, gulp.parallel(html, css, js, img)));
gulp.task('dev', gulp.series('build', gulp.parallel(watchFiles, browserSync)));


exports.cleanFiles = cleanFiles;
exports.html = html;
exports.css = css;
exports.img = img;
exports.js = js;
exports.cacheClean = cacheClean;
