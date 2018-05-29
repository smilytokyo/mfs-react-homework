function run(fn) {
    var gen = fn();
  
    function next(err, data) {
      var result = gen.next(data);
      if (result.done) return;
      result.value(next);
    }
  
    next();
  }

var g = function* (){
    var f1 = yield readFileThunk('test.txt');
    console.log("f1:"+f1.toString())
    var f2 = yield readFileThunk('test2.txt');
    console.log("f2:"+f2.toString())
};
  
run(g);