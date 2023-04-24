// 7-1
// 함수선언식 대신 함수표현식을 사용

// bad
// function 함수명() {
//     구현 로직
// }

// good
// const 함수명 = function () {
//     구현 로직
// };


// 7-2
// 즉시 호출 함수 표현식을 괄호로 감싸기
(function () {
    console.log('welcome!');
}());

