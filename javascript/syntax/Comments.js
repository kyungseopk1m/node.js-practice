// 18-1
// 여러 줄에 걸친 주석을 쓸 때는 /** ... */을 사용

// good
/**
 * make()는 전달된 태그명을 기반으로
 * 새로운 요소를 반환한다.
 */
function make(tag) {

    // ...

    return element;
}


// 18-2
// 한줄 주석을 쓸 때는 //을 사용. 주석 전에는 빈행을 넣어라

// bad
const active = true;  // is current tab

// good
// is current tab
const active = true;


// 18-3
// 모든 주석은 공백으로 시작


// 18-4
// 문제를 지적하고 재고를 촉구하는 경우나 문제의 해결책을 제안하는 경우 등에는 주석 앞에 FIXME 나 TODO 를 붙임으로써 다른 개발자의 빠른 이해를 도울수 있다
//  FIXME -- 해결이 필요 / TODO -- 구현이 필요


// 18-5
// 문제에 대한 주석으로 // FIXME: 를 사용
class Calculator extends Abacus {
    constructor() {
        super();

        // FIXME: 전역 변수를 사용해서는 안 됨
        total = 0;
    }
}


// 18-6
// 문제의 해결책에 대한 주석으로 // TODO: 를 사용
class Calculator extends Abacus {
    constructor() {
        super();

        // TODO: total은 옵션 파라메터로 설정해야함
        this.total = 0;
    }
}