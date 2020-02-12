const routes = require('express').Router();
const request = require('request');
const API = require('../services/api.service')

routes.get('/location', (req, res) => {

    let location = req.query.address
    request(`${API.URL_API_LOCATION}address=${location}&key=${API.API_KEY}`, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        const responseAPI = JSON.parse(body)
        console.log(responseAPI.results[0])
        let infoLocation = []
        infoLocation.push({ address: responseAPI.results[0].formatted_address }, { cordanates: responseAPI.results[0].geometry.location })

        res.json(infoLocation);
    })


})

routes.get('/distance', (req, res) => {
    let { origin, destination } = req.query
    console.log(origin)
    console.log(destination)
    request(`${API.URL_API_DISTANCE}origins=${origin}&destinations=${destination}&key=${API.API_KEY}`, function (error, response, body) {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);

        const responseAPI = JSON.parse(body)
        let { status } = responseAPI.rows[0].elements[0]
        
        if(status === "NOT_FOUND"){
        return res.status(401).send({ error : status })
        }
        
        res.json(responseAPI)
    })


})



module.exports = routes;