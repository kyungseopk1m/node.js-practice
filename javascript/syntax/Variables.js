// 13-1
// 변수를 선언할 때는 항상 const나 let을 사용

const superPower = new SuperPower();


// 13-2
// 하나의 변수 선언/할당에는 하나의 const 또는 let 사용
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';


// 13-3
// const를 그룹화한 다음에 let을 그룹화
const a = true;
const item1 = getItems();
let dragonball1;
let i;
let length;


// 13-4
// 필요한 곳에서 변수를 할당하되 합당한 곳에 둬라
// good
function checkName(hasName) {
    if (hasName === 'test') {
        return false;
    }

    const name = getName();

    if (name === 'test') {
        this.setName('');
        return false;
    }
    return name;
}
