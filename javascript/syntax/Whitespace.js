// 19-1
// 탭은 공백문자 2개로 설정
// // bad
// function foo() {
// ∙∙∙∙let name;
// }
//
// // bad
// function bar() {
// ∙let name;
// }
//
// // good
// function baz() {
// ∙∙let name;
// }


// 19-2
// 주요 중괄호 앞에는 공백을 1개 넣어라
// good
function test() {
    console.log('test');
}


// 19-3
// 제어문의 소괄호 앞에는 공백을 1개 넣어라

// good
if (isJedi) {
    fight();
}

// good
function fight() {
    console.log('Swooosh!');
}


// 19-4
// 연산자 사이에 공백을 넣어라
// good
const x = y + 5;


// 19-5
// 파일 끝에는 개행문자를 1개 넣어라
// // good
// import { es6 } from './AirbnbStyleGuide';
// // ...
// export default es6;↵


// 19-6
// 구문의 앞과 블록의 뒤에는 빈 행을 둬라
// // good
// if (foo) {
//     return bar;
// }
//
// return baz;

// // good
// const arr = [
//     function foo() {
//     },
//
//     function bar() {
//     },
// ];
//
// return arr;


