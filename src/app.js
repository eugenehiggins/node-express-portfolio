'use strict';

var express = require('express'),
    posts = require('./mock/posts.json');

var app = express();

// STATIC
app.use('/static', express.static(__dirname + '/public'));

// JADE
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// ROUTES
app.get('/', function(req, res){
    console.log(__dirname);
    res.render('index');
});

app.get('/blog/:title?', function(req, res){
    //debugger;

    var title = req.params.title;
    if (title === undefined) {
        res.status(503);
        res.send("this page is under constructions");
    } else {
        var post = posts[title] || {};
        res.render('post', { post: post});
    }

});

// SERVER
app.listen(3000, function(){
    console.log("The frontend server is running on port 3000");
});