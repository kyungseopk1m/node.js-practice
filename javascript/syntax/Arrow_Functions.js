// 8-1
// 익명함수를 사용할 때는 화살표 함수 표현을 사용하자

[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
})


// 8-2
// 하나의 식으로 구성된 함수가 사이드 이펙트 없는 표현식을 반환하는 경우, 중괄호 생략하고 암시적 반환 사용 가능

// good
[1, 2, 3].map(number => `A string containing the ${number}.`);
// good
[1, 2, 3].map((number) => {
    const nextNumber = number + 1;
    return `A string containing the ${nextNumber}.`;
})
// good
    [1, 2, 3].map((number, index) => ({
    [index]: number,
}));

// 암시적 반환없이 사이드 이펙트를 수반합니다
function foo(callback) {
    const val = callback();
    if (val === true) {
        // callback이 참을 반환하면 뭔가를 수행합니다
    }
}

let bool = false;


// 8-3
// 표현식이 여러 줄에 걸쳐 있을 때는 가독성을 높이기 위해 소괄호로 감싸라
['get', 'post', 'put'].map(httpMethod => (
    Object.prototype.hasOwnProperty.call(
        httpMagicObjectWithAVeryLongName,
        httpMethod,
    )
));


// 8-4
// 명확성과 일관성을 위해 항상 인자를 괄호로 감싸라
[1, 2, 3].map((x) => x * x);

[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
});