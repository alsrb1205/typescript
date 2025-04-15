/**
 * MenuList Interface
 */
export interface Menu {
    name:string;
    emoji:string;
    price?:number;
    source?:string;
}
export interface MenuPrice extends Menu {
    price?:number;
}
export interface MenuSource extends Menu {
    source?:string;
}

/**
 * EmployeeList Interface
 */

export interface Employee {
    name:string;
    age:number;
    department:string;
    emoji?:string;
}

export interface EmployeeEmoji extends Employee{
    emoji?:string;
}

/**
 * LunchList
 */
export interface Food {
    name: string;
    emoji: string;
    price?: number;
    text?: string;
}
export interface FoodPrice extends Food {
    price?: number;
}
export interface FoodText extends Food {
    text?: string;
}