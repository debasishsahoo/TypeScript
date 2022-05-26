"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Client {
    constructor() {
        this.name = 'Sourav';
        this.age = 20;
        this.Salary = 450000000000;
        this.dept = 'cs';
    }
}
class DB {
    constructor() {
        this.name = 'Signik';
        this.age = 20;
        this.Salary = 150000000000;
    }
}
const client = new DB();
console.log(client.Salary);
