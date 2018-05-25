function fibonacci(n){
    if(n<2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
let [one,two,three,four,five,six,severn,eight,nine,ten] = [
    fibonacci(0),fibonacci(1),fibonacci(2),fibonacci(3),fibonacci(4),fibonacci(5),
    fibonacci(6),fibonacci(7),fibonacci(8),fibonacci(9)]
    
console.log(one);
console.log(two);
console.log(six);
console.log(nine);
console.log(ten);