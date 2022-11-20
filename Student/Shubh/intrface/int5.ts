export { }
interface IPerson {
    name: string;
    email: string;
}
interface IDetails {
    gender: string;
    dept: string
}

interface Employee extends IPerson, IDetails {
    Empid: string,
    Salary: number
}

class Emp implements Employee {
    name: string;
    email: string;
    gender: string;
    dept: string
    Empid: string,
    Salary: number
}



