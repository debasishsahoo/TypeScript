export { }
interface IPerson {
    name: string;
    email: string;
    age: Number;
    GetDetails(): string;
    GetAge(): string;
}

interface Employee extends IPerson {
    Empid: string,
    Salary: number
}

let EmpObj = <Employee>{};
EmpObj.name = 'SK';
console.log('EmpObj.name:', EmpObj.name)
EmpObj.email = 's@s.com';
EmpObj.age = 20;
EmpObj.Empid = 'E0001';
EmpObj.Salary = 3000000;

