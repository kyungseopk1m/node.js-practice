// 20-1
// 맨 앞의 쉼표는 안된다
// bad
const story = [
    once
    , upon
    , aTime
];

// good
const story = [
    once,
    upon,
    aTime,
];


// 20-2
// 맨 끝에 쉼표는 좋다 //eslint: comma-dangle
// 깨끗한 git의 diffs로 이어진다. 레거시 브라우저에서의 불필요한 쉼표 문제를 고민하지 않아도 됨.
// bad - 마지막에 쉼표가 없는 경우 git diff
// const hero = {
//         firstName: 'Florence',
//     -    lastName: 'Nightingale'
// +    lastName: 'Nightingale',
//     +    inventorOf: ['coxcomb chart', 'modern nursing']
// };
//
// // good - 마지막에 쉼표가 있는 경우 git diff
// const hero = {
//         firstName: 'Florence',
//         lastName: 'Nightingale',
//     +    inventorOf: ['coxcomb chart', 'modern nursing'],
// };