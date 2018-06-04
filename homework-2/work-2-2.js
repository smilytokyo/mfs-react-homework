function* fib() {
    let [prev, curr] = [0, 1];
    for (;;) {
      yield curr;
      [prev, curr] = [curr, prev + curr];
    }
}

let [one,two,three,four,five,six,seven,eight,nine,ten] = fib()