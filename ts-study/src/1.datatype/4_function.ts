/**
 * 타입스크립트 함수 선언
 * 
 * function 함수명 (파라미터) {
 *  실행로직
 * return 반환값;
 * }
 */

// greet1("홍길동") --> 화면출력 : 반갑습니다. 홍길동님!!!

function greet1(pname:string) {
    console.log(`반갑습니다 ${pname}님!!`);
}
greet1('홍길동');

function greet2(pname:string, age:number):string {
    return `${pname}의 나이는 ${age}입니다.`;
}
const str: string = greet2('홍길동',30);
console.log(str);
console.log(greet2('홍길동',30));

// greet3("Alice", "서울시 강남구") : 화살표 함수를 통해 '함수 표현식'으로 생성
// 화면출력 : 이름-Alice, 주소-서울시 강남구
// age 나이를 입력ㅂ받는 변수 매개변수 추가, 단, 타입은 정해지지않음!!!
// age 는 필수 입력사항이 아닌 선택사항임 (age?)
const greet3 = (pname: string, addr: string, age?: any) => {
    console.log(`이름 ${pname}, 주소-${addr} 나이-${age}`);
}

greet3("Alice","서울시 강남구",30);
greet3("Alice","서울시 강남구","30");

// greet4(1,2,3,4,5) 값을 입력받아 배열객체로 화면 출력
const greet4 = (...params: any[]) => {
    console.log(params);
}
greet4(1,2,3,4,5);
greet4('홍길동','❤');