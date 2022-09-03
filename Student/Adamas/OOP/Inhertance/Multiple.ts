export {};

interface IPerson {
  age: number;
  name: string;

  getDetails(): void;
}
interface IStudent {
  Subject: string;
}

interface IEmployee {
  id: number;
}

class Engineer implements IPerson, IEmployee, IStudent {
  id = 1;
  name = 'Debasish';
  age = 34;
  Subject = 'Engg';

  getDetails() {
    console.log(`Hello`);
  }
}

interface Engg extends IPerson, IEmployee, IStudent {}

let a: Engg = { name: 'Debasish', age: 34, id: 1, Subject: 'CSE' };

//interface1 ,interface2 -> interface or class
