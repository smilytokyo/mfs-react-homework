/*
var fs = require('fs');

fs.readFile('test.txt',function(err,data){
    if(err){
        console.log(err)
    }
    console.log(data.toString())
});
*/

var thunk = require('thunkify')
var fs = require('fs');

var f = thunk(fs.readFile)
f('test.txt')(function(err, data){
    if(err){
        console.log(err)
    }
    console.log(data.toString())
});

