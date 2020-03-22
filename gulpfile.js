var gulp = require('gulp');

gulp.task('watch',  function(){
    return gulp.watch("src/**/*",["build"]);
});

gulp.task("html", function(){
    return gulp.src("src/*.html")
    .pipe(gulp.dest("build"));
});

gulp.task("css", function(){
    return gulp.src("src/css/*.css")
    .pipe(gulp.dest("build"));
});

gulp.task("js", function(){
    return gulp.src("src/js/*.js")
    .pipe(gulp.dest("build"));
});

gulp.task("images", function(){
    return gulp.src("images/*")
    .pipe(gulp.dest("build"));
});

gulp.task("build",["html","css","js","images"]);