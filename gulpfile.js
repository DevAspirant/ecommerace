var gulp = require('gulp');
var connect = require('gulp-connect');
var flipper = require('gulp-css-flipper');
var merge = require('merge-stream');

gulp.task('default',['build','connect','watch']); // run 

// بناء السيرفر 
gulp.task('connect',function(){
    connect.server({
        root: 'build',
        livereload: true,
        port: 8080,
    })
});

gulp.task('watch',  function(){
    return gulp.watch("src/**/*",["build"]);
});

gulp.task("html", function(){
    return gulp.src("src/*.html")
    .pipe(gulp.dest("build"))
    .pipe(connect.reload()); /* connect to the sever */ 
    
});

gulp.task("css", function(){
    var flip = gulp.src(['src/css/*.css','!src/css/style.css']).pipe(flipper());
    var noFlip = gulp.src('src/css/style.css');
    
    return merge(flip,noFlip)/* for RTL into bootstrap */
    .pipe(gulp.dest("build/css"))
    .pipe(connect.reload() /* connect to the sever */ );
});

gulp.task("js", function(){
    return gulp.src("src/js/*.js")
    .pipe(gulp.dest("build/js"))
    .pipe(connect.reload() /* connect to the sever */ 
    );
});

gulp.task("images", function(){
    return gulp.src("images/*")
    .pipe(gulp.dest("build"))
    .pipe(connect.reload() /* connect to the sever */ 
    );
});

gulp.task("build",["html","css","js","images"]);