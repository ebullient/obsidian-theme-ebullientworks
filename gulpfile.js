"use strict";

const fs = require("fs");
const path = require('path');
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const replace = require("gulp-replace");

gulp.task("css", () => {
    const json = JSON.parse(fs.readFileSync("./package.json"));
    return gulp
        .src("./src/*.scss")
        .pipe(replace("$version$", json.version))
        .pipe(sass.sync().on("error", sass.logError))
        .pipe(
            rename(function (path) {
                if (path.basename == "ebullientworks") {
                    path.basename = "theme";
                }
                path.extname = ".css";
            })
        )
        .pipe(gulp.dest("./dist"));
});

const watchCss = () =>
    gulp.watch("./src/**/*.scss", gulp.series("css", reload));

function reload(done) {
    // This is very not-gulp. But .. push changes to (many?) other folders based compiled output.
    // In .dev-target.json, define a key for each output file, with a string or array of desired
    // targets:
    // {
    //    "obsidian.css": [ 'test1/MyTheme.css', ... ],
    //    "other.css": "thatOtherPlace/"
    // }
    const devTargets = path.resolve(__dirname, '.dev-target.json');
    const distDir = path.resolve(__dirname, 'dist');
    if (fs.existsSync(devTargets)) {
        const data = JSON.parse(fs.readFileSync(devTargets, 'utf-8'));
        for (const [source, targets] of Object.entries(data)) {
            const sourcePath = path.resolve(distDir, source);
            if (Array.isArray(targets)) {
                targets.forEach((t) => {
                    console.log(`copy ${source} to ${t}`);
                    fs.copyFileSync(sourcePath, path.resolve(__dirname, t));
                })
            } else {
                console.log(`copy ${source} to ${targets}`);
                fs.copyFileSync(sourcePath, path.resolve(__dirname, targets));
            }
        }
    }
    done();
}

gulp.task("dev", gulp.series("css", reload, watchCss));
