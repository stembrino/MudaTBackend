const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/route')
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});