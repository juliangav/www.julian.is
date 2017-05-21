import gulp from "gulp";
import cp from "child_process";
import gutil from "gulp-util";
// import postcss from "gulp-postcss";
// import cssImport from "postcss-import";
// import neatgrid from "postcss-neat";
// import nestedcss from "postcss-nested";
// import colorfunctions from "postcss-colour-functions";
// import hdBackgrounds from "postcss-at2x";
// import cssvars from "postcss-simple-vars-async";
// import cssextend from "postcss-simple-extend";
// import styleVariables from "./config/variables";
import sass from "gulp-sass";
import BrowserSync from "browser-sync";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";
import concat from "gulp-concat";
import uglify from "gulp-uglify";


const browserSync = BrowserSync.create();
const hugoBin = "hugo";
const defaultArgs = ["-d", "../dist", "-s", "site", "-v"];

gulp.task("hugo", (cb) => buildSite(cb));
gulp.task("hugo-preview", (cb) => buildSite(cb, ["--buildDrafts", "--buildFuture"]));

gulp.task("build", ["sass", "js", "fonts", "images", "hugo"]);
gulp.task("build-preview", ["sass", "js", "fonts", "images", "hugo-preview"]);



gulp.task("sass", function () {
  return gulp.src('./src/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

// gulp.task("js", (cb) => {
//   const myConfig = Object.assign({}, webpackConfig);

//   webpack(myConfig, (err, stats) => {
//     if (err) throw new gutil.PluginError("webpack", err);
//     gutil.log("[webpack]", stats.toString({
//       colors: true,
//       progress: true
//     }));
//     browserSync.reload();
//     cb();
//   });
// });

gulp.task("js", () => (
  gulp.src("./src/js/*")
    
    .pipe(concat("production.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js/"))
    .pipe(browserSync.stream())
));

gulp.task('js', function() {
  return gulp.src(['./src/js/main.js','./src/js/plugins.js'])
    .pipe(concat('production.min.js'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task("fonts", () => (
  gulp.src("./src/fonts/**/*")
    .pipe(gulp.dest("./dist/fonts"))
    .pipe(browserSync.stream())
));

gulp.task("images", () => (
  gulp.src("./src/img/**/*")
    .pipe(gulp.dest("./dist/img"))
    .pipe(browserSync.stream())
));

gulp.task("server", ["hugo", "sass", "js", "fonts", "images"], () => {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    notify: false
  });
  gulp.watch("./src/js/*.js", ["js"]);
  gulp.watch("./src/css/*/*/*.scss", ["sass"]);
  gulp.watch("./src/img/**/*", ["images"]);
  gulp.watch("./src/fonts/**/*", ["fonts"]);
  gulp.watch("./site/**/*", ["hugo"]);
});

function buildSite(cb, options) {
  const args = options ? defaultArgs.concat(options) : defaultArgs;

  return cp.spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload();
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}
