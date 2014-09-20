/* Guava web server to provide static content. */

(function() {

	var settings= require("./config");
	var express= require("express");  // Express web server

	var port= settings.PORT || 8080;
	var app= express();

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

	app.post("/login", function(req, res, next) {

	});

	app.post("/logout", function(req, res, next) {

	});

	app.post("/signup", function(req, res, next) {

	});

	var server= app.listen(port, function() {
    	console.log('Listening on port %d', server.address().port);
	});
}());