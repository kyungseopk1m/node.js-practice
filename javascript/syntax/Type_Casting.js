// 22-1
// 구문의 선두에서 형을 강제


// 22-2
// 문자열
// => this.reviewScore = 9;

// bad
const totalScore = new String(this.reviewScore); // typeof totalScore is "object" not "string"

// bad
const totalScore = this.reviewScore + ''; // invokes this.reviewScore.valueOf()

// bad
const totalScore = this.reviewScore.toString(); // isn’t guaranteed to return a string

// good
const totalScore = String(this.reviewScore);


// 22-3
// 숫자: 형변환을 할 경우 Number를 사용하고, 문자열을 파싱하는 경우에는 기수를 인자로 넘겨 parseInt를 사용
const inputValue = '4';

// bad
const val = new Number(inputValue);

// bad
const val = +inputValue;

// bad
const val = inputValue >> 0;

// bad
const val = parseInt(inputValue);

// good
const val = Number(inputValue);

// good
const val = parseInt(inputValue, 10);


// 22-4
// 만약 parseInt가 병목현상을 일으켜 성능적인 이유로 비트 시프트를 사용해야 하는 경우 why와 what으로 설명 주석
// good
/**
 * parseInt was the reason my code was slow.
 * Bitshifting the String to coerce it to a
 * Number made it a lot faster.
 * 코드가 느린 원인은 parseInt였음.
 * 비트 시프트를 통해 문자열을 강제 형변환하여
 * 성능을 개선시킴.
 */
const val = inputValue >> 0;


// 22-5
// 비트 연산자를 사용하는 경우, 숫자는 64비트 값으로 표현되어 있으나, 비트 시프트 연산을 한 경우 32비트 정수로 넘겨짐
2147483647 >> 0; // => 2147483647
2147483648 >> 0; // => -2147483648
2147483649 >> 0; // => -2147483647


// 22-6
// 불리언
const age = 0;

// bad
const hasAge = new Boolean(age);

// good
const hasAge = Boolean(age);

// best
const hasAge = !!age;
