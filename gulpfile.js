var gulp = require('gulp');

gulp.task('watch',  function(){
    console.log(" Hello Gulp");
});

gulp.task("build", function(){
    return gulp.src("src/*.html")
    .pipe(gulp.dest("build"));
});

gulp.task("build", function(){
    return gulp.src("src/css/*.css")
    .pipe(gulp.dest("build"));
});

gulp.task("build", function(){
    return gulp.src("src/js/*.js")
    .pipe(gulp.dest("build"));
});

gulp.task("build", function(){
    return gulp.src("images/*")
    .pipe(gulp.dest("build"));
});