'use strict';

var express = require('express');
var app = express();

// ROUTES
app.get('/', function(req, res){
    res.send("<h1>Yay express</h1>");
});

app.get('/blog', function(req, res){

});

// SERVER
app.listen(3000, function(){
    console.log("The frontend server is running on port 3000");
});