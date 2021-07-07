// Importing required modules
const cors = require('cors');
const express = require('express');

const layouts = require("express-ejs-layouts");
// parse env variables
require('dotenv').config();

require("./helpers/db/mongodb.js")();

// Configuring port
const port = process.env.PORT || 9000;


const app = express();

//layout
app.use(layouts)
// Configure middlewares
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
      extended: false,
    }));
app.set('view engine', 'html');
app.set('view engine', 'ejs')

// Static folder
app.use(express.static(__dirname + '/views/'));

// Defining route middleware
app.use('/api', require('./routes/api'));
app.use('/users', require('./routes/users'));
if (process.env.NODE_ENV !== 'test') {
// Listening to port
    app.listen(port);
    console.log(`Listening On http://localhost:${port}/api`);
}
module.exports = app;
