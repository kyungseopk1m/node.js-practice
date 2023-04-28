// 10-1
// 항상 모듈(import/export)을 비표준 모듈 체계 대신 사용
import { es6 } from './AirbnbStyleGuide';
export default es6;

// 10-4
// 같은 경로는 한 곳에서 Import
import foo, { named1, named2 } from 'foo';


// 10-5
// 가변 바인딩을 export 하지 말자
const foo = 3;
export { foo };


// 10-6
// 한가지만 export하는 모듈에서는 이름 붙여진 export보다는 default export를 사용
export default function foo() {}


// 10-7
// 모든 import 구문을 다른 구문들 위에 둬라


// 10-10
// 자바스크립트 파일 확장자를 명시하지 마라
import bar from './bar';