let obj = {
    [Symbol.iterator] : function () {
        return {
          next: function () {
            return {
              value: 'a',
              done: false
            };
          }
        };
    }
}
var f = obj[Symbol.iterator]()
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())