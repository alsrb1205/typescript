/**
 * 동물병원 --> 초코(푸들), 삐삐(고양이), 하양이(토끼)
 * 클래스 설계 : Dog, Cat, Rabbit
 * 
 * Animal(부모)
 * 속성: 이름, 혈액형, 색깔
 * 행위: 먹는다, 잔다
 * 
 * Dog(자식) extends Animal
 * 속성: 이름, 혈액형, 색깔
 * 행위: 먹는다, 잔다
 * 
 * const 초코 = new Dog("초코", "A", "브라운");
 * const 삐삐 = new Cat("삐삐", "B", "흰색");
 * const 하양이 = new Rabbit("하양이", "A", "회색");
 */
class Animal {
    name: string;
    blood: string;
    color: string;

    constructor(name: string, blood: string, color: string) {
        this.name = name;
        this.blood = blood;
        this.color = color;
    }
    sleep(): void {
        console.log(`${this.name}가 잠을 자요.`);
    }

}

class Dog extends Animal {
    type: string;

    constructor(name: string, blood: string, color: string, type: string) {
        super(name, blood, color); // 부모의 생성자 호출
        this.type = type;
    }
}
class Cat extends Animal {
    type: string;

    constructor(name: string, blood: string, color: string, type: string) {
        super(name, blood, color);
        this.type = type;
    }
}
// 상속 관계의 Dog 클래스 호출
// "초코", "A", "브라운"
const 초코 = new Dog("초코", "A", "브라운", "푸들");

console.log(초코);
초코.sleep();

// "삐삐", "B", "흰색","페르시안"
const 삐삐 = new Cat("삐삐", "B", "흰색", "페르시안");
console.log(삐삐);
삐삐.sleep();