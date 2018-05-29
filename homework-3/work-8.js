var thunkify = require('thunkify');
function f(a, b, callback){
    var sum = a + b;
    callback(sum);
}
var ft = thunkify(f);
ft(1, 2)(console.log);