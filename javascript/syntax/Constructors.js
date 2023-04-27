// 9-1
// prototype 을 직접 조작하는 것을 피하고 항상 class를 사용

class Queue {
    constructor(contents = []) {
        this.queue = [...contents];
    }
    pop() {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
    }
}


// 9-2
// 상속에는 extends를 사용
class PeekableQueue extends Queue {
    peek() {
        return this.queue[0];
    }
}


// 9-3
// 메소드가 this를 반환하게 함으로써 메소드 체이닝을 할 수 있다
class Jedi {
    jump() {
        this.jumping = true;
        return this;
    }

    setHeight(height) {
        this.height = height;
        return this;
    }
}

const luke = new Jedi();

luke.jump()
    .setHeight(20);


// 9-4
// toString()을 사용해도 되지만, 올바르게 동작하는지와 사이드 이펙트가 없는지 확인
class Jedi {
    constructor(options = {}) {
        this.name = options.name || 'no name';
    }

    getName() {
        return this.name;
    }

    toString() {
        return `Jedi = ${this.getName()}`;
    }
}


// 9-5
// 클래스는 생성자가 명시되지 않은 경우 기본 생성자를 갖는다
class Rey extends Jedi {
    constructor(...args) {
        super(...args);
        this.name = 'Rey';
    }
}


// 9-6
// 중복되는 클래스 멤버를 만들지 마라
class Foo {
    bar() { return 1; }
}


// 9-7
// 클래스 메소드는 외부 라이브러리나 프레임워크가 구체적으로 비정적 메소드를 요구하지 않는 이상
// this를 사용하거나 해당 메소드를 정적 메소드로 만들어야 한다

// this를 사용
class Foo1 {
    bar() {
        console.log(this.bar);
    }
}

// constructor가 면제
class Foo2 {
    constructor() {
        // ...
    }
}

// 정적 메소드는 this를 사용하지 않는다고 예상할 수 있음
class Foo3 {
    static bar() {
        console.log('bar');
    }
}




