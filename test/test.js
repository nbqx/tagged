var test = require('tape');
var tagged = require(__dirname+'/..');
var through2 = require('through2');

test("get tagged item",function(t){
  var re = new RegExp(".*"+__dirname+"/fixtures","g");
  var rs = __dirname+"/fixtures/test.txt";

  tagged('test')
    .pipe(through2.obj(function(o,enc,next){
      if(re.test(o)){
        this.push(o);
      }
      next();
    })).on('data',function(data){
      t.equal(data,rs,'should be same');
      t.end();
    });
});

