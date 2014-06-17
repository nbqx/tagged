var tagged = require(__dirname);
var es = require('event-stream');
var through2 = require('through2');

var re = new RegExp(".*"+__dirname+"/test/fixtures","g"); 
tagged('test')
  .pipe(through2.obj(function(o,enc,next){
    if(re.test(o)){
      this.push(o);
    }
    next();
  })).on('data',function(data){
    console.log(data);
  });

