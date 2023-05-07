// 23-1
// 한 문자로 된 이름은 피해라. 이름으로부터 의도가 읽혀질 수 있게
// bad
function q() {
    // ...
}

// good
function query() {
    // ...
}


// 23-2
// 객체, 함수, 인스턴스에는 camelCase 사용
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}



// 23-3
// 클래스나 생성자에는 PascalCase 사용
// bad
function user(options) {
    this.name = options.name;
}

const bad = new user({
    name: 'nope',
});

// good
class User {
    constructor(options) {
        this.name = options.name;
    }
}

const good = new User({
    name: 'yup',
});


// 23-4
// 언더스코어를 사용하지 않기
// 언더스코어는 일반적으로 “private”을 의미하지만, 자바스크립트에서 해당 속성은 완전히 public하며, 이는 공공 API의 일부
// bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';
this._firstName = 'Panda';

// good
this.firstName = 'Panda';

// good, in environments where WeakMaps are available
// see https://kangax.github.io/compat-table/es6/#test-WeakMap
const firstNames = new WeakMap();
firstNames.set(this, 'Panda');


// 23-5
// 참조를 this에 저장하지 마라
// bad
function foo() {
    const self = this;
    return function () {
        console.log(self);
    };
}

// bad
function foo() {
    const that = this;
    return function () {
        console.log(that);
    };
}

// good
function foo() {
    return () => {
        console.log(this);
    };
}


// 23-7
// 함수를 export-default할 때 camelCase를 사용. 파일 이름은 함수 이름과 같아야 한다
function makeStyleGuide() {
    // ...
}

export default makeStyleGuide;


// 23-8
// 생성자 / 클래스 / 싱글톤 / 함수 라이브러리 / 단순 객체를 export할 때 파스칼케이스(PascalCase)를 사용
const AirbnbStyleGuide = {
    es6: {
    },
};

export default AirbnbStyleGuide;


// 23-10
// 상수 이름을 대문자로 짓는 것은 해당 상수가 (1) 내보내기 될 때, (2) const 타입일 때 (값이 재할당되지 못할 때),
// (3) 그 상수와 상수가 중첩된 속성이 절대 변하지 않는다는 것을 신뢰할 수 있을 때