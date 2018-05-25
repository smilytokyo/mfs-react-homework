const set = new Set();

[1, 1, 1, 2, 3, 4, 4,5,6,7,8,8].forEach(a => set.add(a));

for (let i of set) {
  console.log(i);
}