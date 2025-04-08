"use strict";
/**
 * 타입스크립트의 Primitive 데이터 타입 실습
 * 변수 정의: const(let) 변수명: 타입정의 = 값(데이터);
 */
// 정수형
let number1 = 100;
number1 = 200;
console.log(number1);
// 실수형
let dnumber1 = 1.234;
dnumber1 = 300;
console.log(dnumber1);
// 불린
let flag = false;
const flag2 = !flag;
console.log(flag);
// 배열 : 문자열 타입 - 홍길동, 홍길순, 홍길영
const names = ['홍길동', '홍길순', '홍길영']; // 객체타입 꼭 줘야함
console.log(names);
// 초기값 : undefined(원시데이터 초기값), null(참조, 객체 데이터 초기값)
const initName = undefined;
const initArray = null;
console.log(initName);
console.log(initArray);
// typeof
const x = 100;
const xx = '100';
// console.log('값 비교', x===xx); // 타입이 다르면 불가능
console.log('타입 비교', typeof (x) === typeof (xx));
