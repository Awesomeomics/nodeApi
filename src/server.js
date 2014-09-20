(function() {

	var settings= require("./config");
	var express= require("express");  // Express web server
	var busboy= require("connect-busboy");  // middleware for file upload
	var path= require("path");

	var port= settings.PORT || 8080;
	var app= express();

	app.use(busboy());

	// this middleware will be executed for every request to the app
	app.use(function(req, res, next) {		
		// log each request to the console
		console.log(req.method, req.url);
		// continue doing what we were doing and go to the route
		next();	
	});

	app.get("/", function(req, res) {
		res.send("Welcome to Gauva!");
	});

	app.get("/team", function(req, res) {
		res.send("Our team is awesome.");
	});

	app.post("/vcf", function(req, res, next) {
		req.busboy.on("file", function(fieldname, file, filename, encoding, mimetype) {
			// Validate file extension
			var vcfPattern= /.+\.vcf/i;
			if (vcfPattern.test(filename)) {
				res.send("File accepted.")
				// HERE we'll call python and pass the file.
			} else {
				res.send("Not a VCF file.")
			}

			console.log("Got the file: " + filename);

		});
		req.pipe(req.busboy);
	});

	var server= app.listen(port, function() {
    	console.log('Listening on port %d', server.address().port);
	});
}());