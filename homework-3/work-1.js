//原函数
function* gen(){
    yield 1
    yield 2
    return 3;
}
var g = gen();
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())

//等价迭代器
function myIterator() {
    var nextIndex = 1;
    return {
      next: function() {
        if( nextIndex < 3){
            return {value: nextIndex++, done: false}
        }else if( nextIndex == 3){
            nextIndex++
            return {value: 3, done: true}
        }else{
            return {value: undefined, done: true}
        }
      }
    };
}
var my = myIterator()
console.log(my.next())  
console.log(my.next())
console.log(my.next())
console.log(my.next())
console.log(my.next())
console.log(my.next())