'use strict';

const config = require('../config.js');

module.exports = (router) => {

    router.get('/', (req, res) => {
        res.render('index',{
            bundleHash: config.bundleHash
        });
    });

}