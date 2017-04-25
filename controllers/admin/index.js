'use strict';

var config = require('../../config.js');

module.exports = function(router) {

    router.get('/', function(req, res) {
        res.render('admin',{
            bundleHash: config.bundleHash
        });
    });

}