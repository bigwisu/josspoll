const path = require('path');
const express = require('express');
const enrouten = require('express-enrouten');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.dev');
const config = require('./config.js');

let app = express();
app.use(express.static(__dirname + '/public'));

const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(enrouten({
    directory: 'controllers'
}));

app.set("view engine", "ejs");
app.set('views', './templates');
app.set("view options", { layout: false });

app.use('*', (req, res) => {
    res.render('index',{
        bundleHash: config.bundleHash
    });
});

let server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server is running at http://%s:%s', host, port);
});
