const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // 1, 9

const fir = [1, 2];
const sec = fir;

sec[0] = 9;

console.log(fir[0], sec[0]); // 9, 9