const express = require('express');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV;
const appPackage = require('./public/package.json');

app.listen(port, () => {
    console.log('We are live on ' + port);
});

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/contents/:page', (req, res) => {
    const page = req.params.page;
    const json = path.join(__dirname, 'services', page + '.json');

    if(fs.existsSync(json)){
        res.sendFile(json);
    }else{
        res.status(404).send('Not found');
    }
});

app.use('/*', (req, res) => {
    ejs.renderFile(path.join(__dirname, 'templates','index.ejs'),
        {
            env: env,
            /** A helper that we can use your assets or styles depend on the env **/
            directoriesLib: function (file) {
                let path = "/"+appPackage.steal.directories.lib+"/"+file;

                if(env === "production"){
                    // rewrite to the dist folder because we use "bundleAssets" on steal-tools
                    return "/dist"+path;
                }else{
                    return path;
                }
            }
        },
        function(err, data) {
            res.send(data);
    });
});



