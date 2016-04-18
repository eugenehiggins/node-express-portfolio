var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var appDir = path.dirname(require.main.filename);

var galleries = require('../mock/galleries.json');

for (var i = 0; i < galleries.length; i++){
	//console.log(galleries[i].dir);
	var gallery = galleries[i];
	for ( var n = 0; n < gallery.images.length; n++){
		var mypath = appDir + "/public/img/gallery/" + gallery.dir + "/" + gallery.images[n];
		//var mypath = appDir + "/public/img/gallery/burgerama-black-lips/IMG_5681.JPG";
		console.log(mypath);
		fs.stat(mypath, function(err,stats){

			if (err) {
				//console.log(err);
				return;
			}

			if (stats.isFile()) {
				console.log('true'); 
			}
			
		})
		
	}
}

/* GET home page. */
router.get('/', function(req, res, next) {
	//console.log(galleryList);
	res.render('index', {
		title: 'Howdy', 
		galleries: galleries 
	});
});

module.exports = router;