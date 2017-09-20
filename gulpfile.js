var gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    vender = require( 'gulp-autoprefixer' ),
    sourcemaps = require( 'gulp-sourcemaps' ),
    plumber = require( 'gulp-plumber' ),
    rigger = require( 'gulp-rigger' ),
    uglify = require( 'gulp-uglify' ),
    concat = require( 'gulp-concat' ),
    rename = require( 'gulp-rename' );


function styles() {

return gulp.src( 'app/sass/*.scss' )
       .pipe(  sourcemaps.init() )
       .pipe( sass({outputStyle: 'compressed'}).on('error', sass.logError) )
       .pipe( vender() )
       .pipe( plumber() ) 
       .pipe( sourcemaps.write() )
       .pipe( rename({

        basename : 'styles',
        suffix : '.min'

        }) )
       .pipe( gulp.dest( 'dist/css/' ) )    

        }   

function build() {

return gulp.src( 'app/*.html' )
           .pipe( rigger() )
           .pipe( gulp.dest( 'dist/' ) )

        }

function jquery() {

return gulp.src( 'app/js/jquery/*.js' )
           .pipe( uglify() )
           .pipe( concat( 'jQuery.js' ) )
           .pipe( gulp.dest( 'dist/js/jquery/' ) )

        }
        
function vanilla() {

return gulp.src( 'app/js/*.js' )
           .pipe( uglify() )
           .pipe( concat( 'common.js' ) )
           .pipe( gulp.dest( 'dist/js/' ) )

        }        

function watch() {

        gulp.watch( 'app/sass/**/*.scss', styles );
        gulp.watch( 'app/**/*.html', build );
        gulp.watch( 'app/js/jquery/*.js', jquery );
        gulp.watch( 'app/js/*.js', vanilla );

        }        

exports.styles = styles;
exports.build = build;
exports.jquery = jquery;
exports.vanilla = vanilla;
exports.watch = watch;