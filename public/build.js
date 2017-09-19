const stealTools = require("steal-tools");
const path = require("path");
const precache = require("steal-serviceworker");

const buildPromise = stealTools.build({
    config: path.join(__dirname, "package.json!npm")
}, {
    bundleAssets: {
        glob: [
            path.join(__dirname, "src", "assets", "**", "*")
        ]
    },
    bundleSteal: false,
    minify: false,
    bundlePromisePolyfill: false

}).then((buildResult) => {
    precache(buildResult, {
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
    });
});