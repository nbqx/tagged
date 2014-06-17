var spawn = require('child_process').spawn;
var es = require('event-stream');

var mdfind = "mdfind";
function tagged(t){
  return es.child(spawn(mdfind,['kMDItemUserTags == '+t]))
    .pipe(es.split())
};

module.exports = tagged;
