// 16-1
// 여러 줄의 블록에는 중괄호
function bar() {
    return false;
}


// 16-2
// 여러 줄의 if와 else 문을 사용할 때는 else 를 if 블록의 닫는 중괄호와 같은 줄에 두자
if (test) {
    thing1();
    thing2();
} else {
    thing3();
}


// 16-3
// if 블록이 항상 return 구문을 실행시킨다면, else 블록은 불필요
// good
function foo() {
    if (x) {
        return x;
    }

    return y;
}

// good
function dogs(x) {
    if (x) {
        if (z) {
            return y;
        }
    } else {
        return z;
    }
}