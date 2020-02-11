const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/route')
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(process.env.PORT || 3000, ()=>{
    console.log('server is on through port 3000');
})

