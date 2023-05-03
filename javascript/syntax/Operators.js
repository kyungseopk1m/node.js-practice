// 15-1
// ==와 != 대신 ===와 !== 을 사용


// 15-2
<!--
Objects는 true로 평가됩니다.
Undefined는 false로 평가됩니다.
Null는 false로 평가됩니다.
Booleans는 boolean형의 값으로 평가됩니다.
Numbers는 true로 평가됩니다. 하지만 +0, -0, NaN의 경우 false로 평가됩니다.
Strings는 true로 평가됩니다. 하지만 빈 문자열 ''은, false로 평가됩니다.
 -->


// 15-3
// 불리언 비교에는 단축형을 사용. 단, 숫자나 문자열은 명시적으로 비교


// 15-6
// 삼항 연산자를 중첩해서는 안되며, 일반적으로 한줄에 표현
// best
const foo = maybe1 > maybe2 ? 'bar' : maybeNull;


// 15-7
// 불필요한 삼항 연산자를 사용하지 마라
// good
const foo = a || b;
const bar = !!c;
const baz = !c;


// 15-8
// 연산자를 섞어 사용할 때 해당 연산자들을 괄호로 둘러싸세요
// const foo = (a && b < 0) || c > 0 || (d + 1 === 0);

// const bar = (a ** b) - (5 % d);

// if (a || (b && c)) {
//     return d;
// }

// const bar = a + b / c * d;


//