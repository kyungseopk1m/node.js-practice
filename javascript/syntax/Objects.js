// // bad
// const item = new Object();

// good
const item1 = {};

// 객체 생성시에는 리터럴 문법 사용

function getKey(k) {
    return `a key named ${k}`;
}

// // bad
// const obj = {
//     id: 5,
//     name: 'San Francisco',
// };
// obj[getKey('enabled')] = true;

// good
const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enable')]:true,
}

// 동적 속성을 갖는 객체를 생성할 떄는 속성 계산명을 사용

// // bad
// const atom = {
//     value: 1,
//
//     addValue: function (value) {
//         return atom.value + value;
//     },
// };

// good
const atom = {
    value: 1,

    addValue(value) {
        return atom.value + value;
    },
};

// 메소드의 단축구문을 사용

const lukeSkywalker = 'Luke Skywalker';

// // bad
// const obj = {
//     lukeSkywalker: lukeSkywalker,
// };

// good
const obj1 = {
    lukeSkywalker,
};

// 속성의 단축구문 사용

const a1 = 'a';
const b2 = 'b';

const obj00 = {
    a1,
    b2,
    episodeOne: 1,
    episodeThree: 3,
    mayTheFourth: 4,
};

// 속성의 단축구문은 객체 선언의 시작 부분에 모아주기

const good = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
};

// 유효하지 않은 식별자에만 따옴표 속성을 사용

// // bad
//  console.log(Object.hasOwnProperty(key));

// good
// console.log(Object.prototype.hasOwnProperty.call(Object, key));

// best
const has = Object.prototype.hasOwnProperty; //모듈스코프에서 한번 캐치
// console.log(has.call(Object, key));
/* or */
// import has from 'has';
// console.log(has(object, key));

// Object.prototype 메소드를 직접 호출하지 않기. 객체의 속성에 의해 가려지거나 객체가 null 객체일 수 있음

const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }
const { a, ...noA } = copy; // noA => { b: 2, c: 3 }

console.log(copy);

// 객체에 대해 얕은 복사를 할 때는 Object.assign 대신 객체 전개 구문을 사용