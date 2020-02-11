const routes = require('express').Router();
const request = require('request');
const API = require('../services/api.service')

routes.post('/location', async (req, res)=> {
    request(API.URL_API_LOCATION, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        const responseAPI  = JSON.parse(body)
        console.log(responseAPI.results[0])
        res.json(responseAPI.results[0].geometry.location);
    })
    
   
})



module.exports = routes;