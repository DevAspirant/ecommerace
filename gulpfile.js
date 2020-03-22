var gulp = require('gulp');
var connect = require('gulp-connect');

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
    return gulp.src("src/css/*.css")
    .pipe(gulp.dest("build"))
    .pipe(connect.reload() /* connect to the sever */ );
});

gulp.task("js", function(){
    return gulp.src("src/js/*.js")
    .pipe(gulp.dest("build"))
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