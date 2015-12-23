var fs = require('fs');
var http = require('http');

var port = process.argv[2] || 8000;

console.log('Server running on 127.0.0.1:' + port);

http.createServer(function (request, response) {
  fs.readFile(__dirname + '/index.html', function (err, data) {
    response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
    response.write(data);
    response.end();
  });
}).listen(port);