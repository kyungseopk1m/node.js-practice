// 24-1
// 속성을 위한 접근자 함수는 필수가 아니다


// 24-2
// 자바스크립트 getters/setters를 사용하지 마라. 예기치못한 사이드 이펙트를 일으키고 테스트와 유지보수를 어렵게 만든다.
// 접근자 함수를 만들고 싶다면 대신, getVal()과 setVal('hello')를 사용
// bad
class Dragon {
    get age() {
        // ...
    }

    set age(value) {
        // ...
    }
}

// good
class Dragon {
    getAge() {
        // ...
    }

    setAge(value) {
        // ...
    }
}


// 24-3
// 속성이나 메소드가 boolean이라면, isVal()이나 hasVal() 사용
// // bad
// if (!dragon.age()) {
//     return false;
// }
//
// // good
// if (!dragon.hasAge()) {
//     return false;
// }


// 24-4
// get()과 set() 함수를 만들되, 일관성있게 만들어라
class Jedi {
    constructor(options = {}) {
        const lightsaber = options.lightsaber || 'blue';
        this.set('lightsaber', lightsaber);
    }

    set(key, val) {
        this[key] = val;
    }

    get(key) {
        return this[key];
    }
}

