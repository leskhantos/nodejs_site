var fs = require('fs');
// fs.unlink('texter.txt',function(err,data){});
fs.unlink('./new-one/new.txt',function(err,data){
  fs.rmdir('new-one',function(){
    console.log('removed');
  })
});
