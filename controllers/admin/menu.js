'use strict';

const config = require('../../config.js');

module.exports = (router) => {

    router.get('/', (req, res) => {

        let menu = [];

        let posts = {
            url: '/posts',
            icon: 'icon-pin',
            text: 'Posts',
            branch: true,
            children: [{
                url: '/posts/all',
                icon: 'icon-list',
                text: 'All Posts'
            },{
                url: '/posts/create',
                icon: 'icon-note',
                text: 'Add New'
            },{
                url: '/posts/categories',
                icon: 'icon-folder',
                text: 'Categories'
            },{
                url: '/posts/tags',
                icon: 'icon-tag',
                text: 'Tags'
            }]
        }

        menu.push(posts);

        let images = {
            url: '/images',
            icon: 'icon-picture',
            text: 'Images',
            branch: true,
            children: [{
                url: '/images/all',
                icon: 'icon-list',
                text: 'Library'
            },{
                url: '/images/create',
                icon: 'icon-arrow-up-circle',
                text: 'Add New'
            }]
        }

        menu.push(images);

        let comments = {
            url: '/comments',
            icon: 'icon-speech',
            text: 'Comments',
            branch: false
        }

        menu.push(comments);

        let profile = {
            url: '/profile',
            icon: 'icon-user',
            text: 'Profile',
            branch: false
        }

        menu.push(profile);

        let settings = {
            url: '/settings',
            icon: 'icon-settings',
            text: 'Settings',
            branch: true,
            children: [{
                url: '/settings/users',
                icon: 'icon-people',
                text: 'Users'
            }]
        }

        //TODO: Implement ACL
        menu.push(settings);

        res.json(menu);

    });

}