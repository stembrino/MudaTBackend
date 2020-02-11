const routes = require('express').Router();


routes.get('/', async (req, res, next)=> {
    res.json({ success: 'server works' });
})

module.exports = routes;