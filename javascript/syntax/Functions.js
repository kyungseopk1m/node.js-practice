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

// 7-3
// 함수 이외의 불록에서 함수를 선언하지 말자

// 7-5
// 절대 매개변수의 이름을 arguments 라고 짓지 말자

// 7-6
// 절대 arguments를 사용하지 말자. 대신 나머지 문법(rest syntax) ...를 사용하자

function concatenateAll(...args) {
    return args.join('');
}

// 7-7
// 함수의 인자를 변조하기 보다는 기본 매개변수 문법을 사용


function handleThings(opts = {}) {
    // ...
}

// 7-9
// 기본 매개변수는 항상 뒤쪽에 두자
function handleThings(name, opts = {}) {
    // ...
}


// 7-11
// 함수 시그니처에 공백을 넣자. 일관성을 갖는 것이 좋으니까!

const x = function () {};
const y = function a() {};


// 7-12
// 절대로 매개변수를 바꾸지 말자
// 매개변수로 전달된 객체를 조작하면 원래 호출처에서 원치 않은 사이드 이펙트를 일으킬 수 있음

function f2(obj) {
    const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}



// 7-13
// 절대로 매개변수를 재할당하지 마라

// // bad
// function f1(a) {
//     a = 1;
//     // ...
// }
//
// function f2(a) {
//     if (!a) { a = 1; }
//     // ...
// }

// good
function f3(a) {
    const b = a || 1;
    // ...
}

function f4(a = 1) {
    // ...
}


// 7-14
// 가변 인자 함수를 호출할 때는 전개 구문 ...을 사용

const x = [1, 2, 3, 4, 5];
console.log(...x);

new Date(...[2016, 8, 5]);






