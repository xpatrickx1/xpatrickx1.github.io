const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
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
const webpackStream = require('webpack-stream');
const util = require('gulp-util');

const isProd = util.env.production;

const paths = {
    html: {
        // src: 'src/index.html',
        src: 'src/*.html',
        dest: 'dist/'
    },
    styles: {
        src: 'src/scss/main.scss',
        dest: 'dist/css/',
        dest2: 'css/'
    },
    scripts: {
        src: 'src/js/main.js',
        src2: 'src/js/**/*.js',
        dest: 'dist/js/',
        dest2: 'js/'
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
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(gulp.dest(paths.styles.dest2))
        .pipe(browsersync.stream());
}

function js() {
    return gulp.src([paths.scripts.src, paths.scripts.src2])
    // return gulp.src(paths.scripts.src)
        // .pipe(plumber())
        // .pipe(jshint())
        .pipe(webpackStream({
            output: {
                filename: 'main.js',
            },
            mode: 'development',
            devtool: 'inline-source-map',
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules)/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
        }))
        .pipe(concat('main.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(jsMin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(gulp.dest(paths.scripts.dest2))
        .pipe(browsersync.stream());
}

function img() {
    return gulp.src(paths.img.src)
        // .pipe(imagemin())
        .pipe(gulp.dest(paths.img.dest))
}


function watchFiles() {
    gulp.watch('src/**/*.html', html);
    gulp.watch('src/scss/**/*', css);
    gulp.watch('src/js/**/*', js);
    gulp.watch('src/img/**/*', img);
}

// function build() {
//     gulp.parallel(img, js, gulp.series(css, html));
//   }

const dev = gulp.series(watchFiles, browserSync);
const build = gulp.parallel(img, js, gulp.series(css, html));
  


exports.cleanFiles = cleanFiles;
exports.html = html;
exports.css = css;
exports.img = img;
exports.js = js;
exports.cacheClean = cacheClean;
exports.default = !isProd ? dev : build;
