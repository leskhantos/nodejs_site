var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){
  console.log(req.url);
  if (req.url === '/index' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html charset=utf-8'});
    fs.createReadStream(__dirname+'/products.html').pipe(res);
  }else if (req.url === '/about' ) {
    res.writeHead(200, {'Content-Type': 'text/html charset=utf-8'});
    fs.createReadStream(__dirname+'/about.html').pipe(res);
  }else{
    res.writeHead(404, {'Content-Type': 'text/html charset=utf-8'});
    fs.createReadStream(__dirname+'/index.html').pipe(res);
  }
  // var obj = {
  //   mad: "dsdsd",
  //   wheel: 3,
  //   speed: 2333
  // };
  // res.end(JSON.stringify(obj));
  // var readFile = fs.createReadStream(__dirname+'/index.html');
  // readFile.pipe(res);
});
server.listen(3000, '127.0.0.1');
console.log('we listen port: 3000');
