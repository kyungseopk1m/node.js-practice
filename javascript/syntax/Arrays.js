const items = [];

// 4-1
// 배열을 생성할 때는 리터럴 구문을 사용

const someStack = [];

// 4-2
// 배열에 직접 값을 할당하지 않고 Array#push를 사용

const itemsCopy = [...items];

// 4-3
// 배열을 복사할 때는 배열 전개 구문 ...을 사용

// // good
// const codes = Array.from(foo);

// best
const nodes = [...foo];

// 4-4
// 순회 가능한 객체를 배열로 변환할 때는 Array.from 대신 전개 구문 ...을 사용