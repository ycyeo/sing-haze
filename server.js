var http = require('http');
var port = process.env.PORT || 8080;

var server = http.createServer(function(request, response) {
   console.log('Got Request Headers: ');
   console.log(request.headers);
   response.writeHead(200, {
      'Content-Type': 'text/plain'
   });
   response.write('PONG');
   response.end();
}).listen(port);

