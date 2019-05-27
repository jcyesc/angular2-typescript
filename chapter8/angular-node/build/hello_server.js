"use strict";
var http = require('http');
/**
 * Creates a Node web server.
 */
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end('{"message": "Hello Json!"}\n');
});
var port = 8000;
server.listen(port);
console.log('Listening on http://localhost:' + port);
