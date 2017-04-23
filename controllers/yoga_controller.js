// GET requests to https url
const rp = require('request-promise');
const express = require('express');
// dependency for request-promise
const request = require('request');
const keys = require('../keys');
// call Router function on express and assign to const router to export on "router" file with all route paths
const router = express.Router();

const instagramKey = keys.instagramKeys.access_token;

router.get('/yogaInstagram', function(req, res) {
    var options = {
    method: 'GET',
    uri: 'https://api.instagram.com/v1/users/self/media/recent?count=1&access_token=' + instagramKey,
    qs: {
        access_token: instagramKey
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically stringifies the body to JSON 
};
 
rp(options)
    .then(function (parsedBody) {
        // POST succeeded... 
        console.log(parsedBody.data[0].images);
        res.send(parsedBody.data[0].images);
    })
    .catch(function (err) {
        // POST failed... 
        console.log(err);
    }); 



});




module.exports = router;