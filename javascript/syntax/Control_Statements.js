// 17-1
// 제어문이 너무 길거나 최대 길이를 넘긴 경우, 각 조건을 새로운 줄에 둬라
// 줄의 맨 처음에 연산자를 두면 연산자의 정렬을 유지하고, 메소드 체이닝과 비슷한 패턴을 따를 수 있다

// good
if (
    foo === 123
    && bar === 'abc'
) {
    thing1();
}

// good
if (
    (foo === 123 || bar === 'abc')
    && doesItLookGoodWhenItBecomesThatLong()
    && isThisReallyHappening()
) {
    thing1();
}

// good
if (foo === 123 && bar === 'abc') {
    thing1();
}


// 17-2
// 선택 연산자를 제어 구문 대신 쓰지 말자
if (!isRunning) {
    startRunning();
}