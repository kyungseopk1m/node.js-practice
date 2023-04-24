// 5-1
// 하나의 객체에서 여러 속성에 접근할 때는 객체 비구조화를 사용

function getFullName ({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}


// 5-2
// 배열 비구조화를 사용

const arr = [1, 2, 3, 4];

const [first, second] = arr;


// 5-3
// 여러 값을 반환하는 경우 배열 비구조화가 아닌 객체 비구조화를 사용
// 호출처에 영향을 주지 않고 새로운 속성을 추가하거나 순서 변경 가능

function processInput(input) {
    return { left, right, top, bottom };
}

// 필요한 데이터만 선택
const { left, top } = processInput(input);