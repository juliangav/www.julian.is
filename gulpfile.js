const cp = require("child_process");
const { existsSync } = require("fs");
const fs = require("fs/promises");
const path = require("path");

const browserSync = require("browser-sync").create();
const { dest, parallel, series, src, task, watch } = require("gulp");
const sass = require("sass");
const { minify } = require("terser");

const HUGO_BIN = "hugo";
const HUGO_ARGS = ["-d", "../dist", "-s", "site", "-v"];
const JS_SOURCES = ["src/js/main.js", "src/js/plugins.js"];

function reloadBrowser() {
  if (browserSync.active) {
    browserSync.reload();
  }
}

function runHugo(options = []) {
  const args = HUGO_ARGS.concat(options);

  return new Promise((resolve, reject) => {
    const child = cp.spawn(HUGO_BIN, args, { stdio: "inherit" });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        reloadBrowser();
        resolve();
      } else {
        if (browserSync.active) {
          browserSync.notify("Hugo build failed");
        }
        reject(new Error(`Hugo build failed with exit code ${code}`));
      }
    });
  });
}

function hugo() {
  return runHugo();
}

function hugoPreview() {
  return runHugo(["--buildDrafts", "--buildFuture"]);
}

async function styles() {
  const result = sass.compile("src/css/style.scss", {
    style: "expanded"
  });

  await fs.mkdir("dist", { recursive: true });
  await fs.writeFile("dist/style.css", result.css);
  reloadBrowser();
}

async function scripts() {
  const source = (await Promise.all(
    JS_SOURCES.map((file) => fs.readFile(file, "utf8"))
  )).join("\n");

  const result = await minify(source, {
    compress: true,
    mangle: true
  });

  if (!result.code) {
    throw new Error("Terser did not emit JavaScript output");
  }

  await fs.mkdir(path.join("dist", "js"), { recursive: true });
  await fs.writeFile(path.join("dist", "js", "production.min.js"), result.code);
  reloadBrowser();
}

function copyIfExists(sourceDir, glob, outputDir) {
  if (!existsSync(sourceDir)) {
    return Promise.resolve();
  }

  return src(glob).pipe(dest(outputDir));
}

function fonts() {
  return copyIfExists("src/fonts", "src/fonts/**/*", "dist/fonts");
}

function images() {
  return copyIfExists("src/img", "src/img/**/*", "dist/img");
}

function serve(done) {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    notify: false
  });
  done();
}

function watchFiles() {
  watch("src/js/**/*.js", scripts);
  watch("src/css/**/*.scss", styles);
  watch("src/img/**/*", images);
  watch("src/fonts/**/*", fonts);
  watch("site/**/*", hugo);
}

const assets = parallel(styles, scripts, fonts, images);
const build = series(assets, hugo);
const buildPreview = series(assets, hugoPreview);
const server = series(build, serve, watchFiles);

task("hugo", hugo);
task("hugo-preview", hugoPreview);
task("sass", styles);
task("js", scripts);
task("fonts", fonts);
task("images", images);
task("build", build);
task("build-preview", buildPreview);
task("server", server);

exports.hugo = hugo;
exports["hugo-preview"] = hugoPreview;
exports.sass = styles;
exports.js = scripts;
exports.fonts = fonts;
exports.images = images;
exports.build = build;
exports["build-preview"] = buildPreview;
exports.server = server;
exports.default = build;
