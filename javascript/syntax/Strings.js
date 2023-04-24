// 6-1
// 문자열에는 작은 따옴표 ''를 사용

const name = 'Capt. Janeway';

// 6-2
// 100자가 넘는 문자열을 문자열 연결을 이용해 여러 줄에 걸쳐쓰지 않기

// good
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

// 6-3
// 문자열을 생성하는 경우 문자열 연결 대신 템플릿 문자열을 사용

function sayHi(name) {
    return `How are you, ${name}?`;
}

// 6-4
// 문자열에 eval() 사용하지 않기

// 6-5
// 문자열에 불필요한 이스케이프 문자 사용하지 않기

const foo = '\'this\' is "quoted"';
const foo1 = `my name is '${name}'`;