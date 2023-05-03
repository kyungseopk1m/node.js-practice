// 14-1
// var 선언은 할당없이 가장 가까운 함수 스코프의 꼭대기에 호이스팅


// 14-2
// 익명함수의 경우 함수가 할당되기 전의 변수가 호이스팅
function example() {
    console.log(anonymous); // => undefined

    anonymous(); // => TypeError anonymous is not a function

    var anonymous = function () {
        console.log('anonymous function expression');
    };
}


// 14-3
// 명명함수의 경우에도 똑같이 변수가 호이스팅. 함수의 이름이나 본체는 호이스팅되지 않는다.


// 14-4
// 함수선언은 함수명과 함수본체가 호이스팅
function example1() {
    superPower();

    function superPower() {
        console.log('Flying');
    }
}