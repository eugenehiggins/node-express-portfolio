'use strict';

var express = require('express');

var routes = require('./routes/index');
var blog = require('./routes/blog');

var app = express();

// STATIC
app.use('/static', express.static(__dirname + '/public'));

// JADE
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// ROUTES
app.use('/', routes);
app.use('/blog', blog);



// SERVER
app.listen(3000, function(){
    console.log("The frontend server is running on port 3000");
});