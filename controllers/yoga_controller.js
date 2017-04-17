// GET requests to https url
const rp = require('request-promise');
const express = require('express');
// dependency for request-promise
const request = require('request');
const keys = require('../keys');
// call Router function on express and assign to const router to export on "router" file with all route paths
const router = express.Router();

const instagramKey = keys.instagramKeys.access_token;

var options = {
    method: 'GET',
    uri: 'https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=' + instagramKey,
    json: true // Automatically stringifies the body to JSON 
};
 
rp(options)
    .then(function (parsedBody) {
        // POST succeeded... 
        console.log(parsedBody);
    })
    .catch(function (err) {
        // POST failed... 
        console.log(err);
    }); 



module.exports = router;