## tagged

osx `kMDItemUserTags == ?` wrapper (tags in 10.9 and later)

## usage

    $ git clone https://github.com/nbqx/tagged.git
    $ cd tagged
    $ npm link . 
    $ tagged Work
    $ tagged Private
    ....

with [percol](https://github.com/mooz/percol) or [peco](https://github.com/lestrrat/peco) and xargs

    $ tagged Work | peco | xargs open

or

    $ npm install git://github.com/nbqx/tagged.git

then

```js
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
```

