const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require ('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function compilaSass() {
    return gulp.src('./source/styles/*.scss') //pegar os arquivos fontes
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        })) //encadear as funcoes que estamos chamando
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles')); //enviar arquivos para determinada pasta
    }

function comprimeJS() {
    return gulp.src('./source/scripts/*js')
        .pipe(uglify()) //minificar o js para tornar o arquivo menor
        .pipe(obfuscate()) //tornar js menos legivel
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*js', { ignoreInitial: false}, gulp.series(comprimeJS));
    gulp.watch('./source/images/*', { ignoreInitial: false}, gulp.series(comprimeImagens));
}


