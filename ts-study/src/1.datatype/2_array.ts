/**
 * 타입스크립트 배열 형식
 * const(let) 배열변수명:타입정의[] = [데이터,...];
 * const(let) 배열변수명:Array<타입정의> = new Array();
 */

// 1, 2, 3, 4, 5 숫자를 저장하는 배열 생성
const numArray1: number[] = [1, 2, 3, 4, 5];
const numArray2: Array<number> = new Array(1, 2, 3, 4, 5);

console.log(numArray1[0]);
console.log(numArray2.length);

// 배열의 메소드: forEach, for...in, for...of, map..

numArray1.forEach(num => console.log('numArray1',num));
numArray2.forEach(num =>  console.log('numArray2',num))

// for of
for (const num of numArray1) console.log(num);
for (const num of numArray2) console.log(num);