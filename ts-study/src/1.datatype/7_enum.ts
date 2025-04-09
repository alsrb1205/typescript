/**
 * enum - 열거형으로 표현되는 데이터를 저장하는 형식
 * 정의 형식
 * const(let) enum 변수명 {
 *      enum item 1, //index 0
 *      enum item 2, //index 1
 *      enum item 3, //index 2
 *      ...
 * }
 */

const objLiteral = {
    name: '홍길동',
    age: 20
};
enum objEnum {
    TypeScript='dd',
    JavaScript='gg'
}
console.log(objEnum);
console.log(objEnum.TypeScript);


// 출력 형식의 차이점!!!
// objLiteral --> for.. in 사용 불가, Object.key() : [name, age] --> forEach를 사용해서 출력
const keys = Object.keys(objLiteral);
console.log(keys);

console.log('forEach----------------------------------------');

keys.forEach(key => {
    console.log(`${objLiteral[key as keyof typeof objLiteral]}`);
});

// objEnum --> for.. in 사용 가능
console.log('objEnum: for...in---------------------------------------');

for (const key in objEnum) {
    console.log(`${key} : ${objEnum[key as keyof typeof objEnum]}`);
}
