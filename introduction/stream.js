var fs = require('fs');
var readFile = fs.createReadStream(__dirname+'/article.txt');
var write = fs.createWriteStream(__dirname+'/news.txt');
readFile.on('data',function(chunk){
  console.log('new data:\n\n\n\n\n\n\n\n'+chunk);
  write.write(chunk);
});
