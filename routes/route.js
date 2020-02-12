const routes = require('express').Router();
const request = require('request');
const API = require('../services/api.service')

routes.get('/location', (req, res)=> {
    
    // let { address } = req.body
    // console.log(req.body)
    // request(`${API.URL_API_LOCATION}address=${ address }&key=${ API.API_KEY  }`, function (error, response, body) {
    //     console.log('error:', error); // Print the error if one occurred
    //     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //     const responseAPI  = JSON.parse(body)
    //     console.log(responseAPI.results[0])
    //     res.json(responseAPI.results[0].geometry.location);
    // })
    let location = req.query.address
    console.log(location)
    request(`${API.URL_API_LOCATION}address=${ location }&key=${ API.API_KEY  }`, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        const responseAPI  = JSON.parse(body)
        console.log(responseAPI.results[0])
        let infoLocation = []
        infoLocation.push({address: responseAPI.results[0].formatted_address}, {cordanates: responseAPI.results[0].geometry.location})

        res.json(infoLocation);
    })
    
   
})



module.exports = routes;