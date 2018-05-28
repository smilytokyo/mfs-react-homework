function* fib() {
    let [prev, curr] = [0, 1];
    for (;;) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    }
}
  
let f = fib()
let [first,second,third] = [f.next(),f.next(),f.next()]
