var express = require('express');
var router = express.Router();

var posts = require('../mock/posts.json');
var postsList = Object.keys(posts).map(function(value) {
    return posts[value];
});

router.get('/:title?', function(req, res){
    //debugger;

    var title = req.params.title;
    if (title === undefined) {
        res.status(503);
        res.render('blog2', { posts: postsList});
    } else {
        var post = posts[title] || {};
        res.render('post', { post: post});
    }

});

module.exports = router;