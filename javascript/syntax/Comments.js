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