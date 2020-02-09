var http = require('http');
var fs = require('fs');
var readFile = fs.createReadStream(__dirname+'/article.txt');
var text =  'text and some datak'

var server = http.createServer(function(req, res){
  console.log(req.url);
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end(text);
});
server.listen(3001, '127.0.0.1');
console.log('we listen port: 3001');
