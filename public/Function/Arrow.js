"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sum = (x, y) => {
    return x + y;
};
sum(10, 20); //returns 30
let Print = () => console.log('Hello TypeScript');
Print(); //Output: Hello TypeScript
class Employee {
    constructor(code, name) {
        this.display = () => console.log(this.empCode + ' ' + this.empName);
        this.empName = name;
        this.empCode = code;
    }
}
let emp = new Employee(1, 'Ram');
emp.display();
