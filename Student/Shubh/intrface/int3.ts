export { }
interface IPerson {
    name: string;
    email: string;
    age: Number;
    GetDetails(): string;
    GetAge(): string;
}

class Employee implements IPerson {
    name: string;
    email: string;
    age: Number;
    dept: string;

    GetDetails() {
        return `${this.name} and ${this.email} `
    };
    GetAge() {
        return `${this.age}`
    }

    constructor(n: string, e: string, a: number, d: string) {
        this.name = n;
        this.email = e;
        this.age = a;
        this.dept = d;
    }

}

let MyEmp: IPerson = new Employee('SK', 's@s.com', 22, 'CSE')

let fullDetails = MyEmp.GetDetails();

console.log('fullDetails:', fullDetails)
