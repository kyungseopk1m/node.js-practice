// 11-1
// 이터레이터를 사용하지 마라

const number = [1, 2, 3, 4, 5];

// // bad
// let sum = 0;
// for (let num of numbers) {
//     sum += num;
// }
// sum === 15;

// // good
// let sum = 0;
// numbers.forEach((num) => {
//     sum += num;
// });
// sum === 15;

// best
const sum = number.reduce((total, num) => total + num, 0);
sum === 15;


// 11-2
// 제너레이터를 사용하지 마라


// 11-3
// 만을 반드시 제너레이터를 사용해야 하는 경우 함수 시그니처 공백이 적절한지 확인

// bad
// function * foo() {
//     // ...
// }

// good
function* foo() {
    // ...
}
