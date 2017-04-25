var path = require('path');
var express = require('express');
var enrouten = require('express-enrouten');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.dev');
var config = require('./config.js');

var app = express();
app.use(express.static(__dirname + '/public'));

var compiler = webpack(webpackConfig);

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

app.use('*', function(req, res) {
    res.render('index',{
        bundleHash: config.bundleHash
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server is running at http://%s:%s', host, port);
});
