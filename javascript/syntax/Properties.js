// 12-1
// 속성에 접근할 때는 마침표 사용
const luke = {
    jedi: true,
    age: 28,
};

const isJedi = luke.jedi;


// 12-2
// 변수를 사용해 속성에 접근할 때는 대괄호 [] 사용

function getProp(prop) {
    return luke[prop];
}

const isJedi1 = getProp('jedi');



// 12-3
// 제곱 계산을 할 때는 제곱 연산자 **를 사용
const binary = 2 ** 10;