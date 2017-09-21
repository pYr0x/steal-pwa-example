const {promisify} = require('util');

const stealTools = require("steal-tools");
const path = require("path");
const rimraf = require("rimraf");
const precache = require("steal-serviceworker");

const rimrafPromisfy = promisify(rimraf);


async function build() {
    await rimrafPromisfy("dist/**/*");

    let buildResult = await stealTools.optimize({
        config: path.join(__dirname, "package.json!npm")
    }, {
        bundleAssets: {
            glob: [
                path.join(__dirname, "src", "assets", "**", "*"),
                path.join(__dirname, "src", "styles.css"),
                path.join(__dirname, "src", "manifest.json")
            ]
        },
        //bundleSteal: false,
        minify: false,
        //bundlePromisePolyfill: false,
        splitLoader: false
    });

    /*await precache(buildResult, {
        staticFileGlobs: [
            path.join(__dirname, "dist", '**', '*.*')
        ],
        runtimeCaching: [{
            urlPattern: "/",
            handler: "networkFirst"
        }, {
            urlPattern: "contents/:page",
            handler: "networkFirst"
        }]
    });*/
}

build();