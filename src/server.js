(function() {
	var http= require("http");
	var $= require("jquery");
	var settings= require("./config");

	http.createServer(function(request, response) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.end("Guava is here!");
	}).listen(settings.port, settings.hostname);
	console.log("Server running at " + settings.hostname + ":" + settings.port);
}());