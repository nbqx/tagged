#!/usr/bin/env node
var tagged = require(__dirname+"/../");

var tag = process.argv[2] || "";
tagged(tag).on('data',function(data){
  if(data!==''){
    console.log(data);
  }
});
