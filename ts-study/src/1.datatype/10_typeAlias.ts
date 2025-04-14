/**
 * 타입 별칭 - 객체의 타입을 정의함, 인터페이스와 같은 역할로 사용됨
 */
type AnimalType = {
    name: string;
    blood: string;
    color: string;
    sleep(): void;
}

// 타입을 구현하기 위한 클래스 정의
class typeClass implements AnimalType {
    name: string;
    blood: string;
    color: string;

    constructor(name:string,blood:string,color:string){
        this.name=name;
        this.blood=blood;
        this.color=color;

    }
    sleep(): void {}; // 안써도 만들어놓긴 해야함
    info():void{
        console.log(`${this.name}의 혈액형은 ${this.blood}이고, 색깔은 ${this.color}입니다.`);
    }
}

// AnimalType의 객체 생성

// const 깜둥이:AnimalType =new typeClass("깜둥이","A","검은색");  // 객체타입이 AnimalType 이므로 info() 함수  호출 불가!!!

const 깜둥이:typeClass =new typeClass("깜둥이","A","검은색");
console.log(깜둥이);
깜둥이.info();
 