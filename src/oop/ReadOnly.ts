//Readonly Modifier
class Company {
  readonly country: string = 'India';
  readonly name: string;

  constructor(contName: string) {
    this.name = contName;
  }
  showDetails() {
    console.log(this.name + ' : ' + this.country);
  }
}
let comp = new Company('JRA Solutions');
comp.showDetails(); // JRA Solutions : India
comp.name = 'TCS';

//ReadOnly Interface
interface IEmployee {
  readonly empCode: number;
  empName: string;
}
let empObj: IEmployee = {
  empCode: 1,
  empName: 'Steve',
};
empObj.empCode = 100;

//ReadOnly Type
interface IEmployee {
  empCode1: number;
  empName1: string;
}

let emp1: Readonly<IEmployee> = {
  empCode1: 1,
  empName1: 'Steve',
};

emp1.empCode1 = 100; // Compiler Error: Cannot change readonly 'empCode'
emp1.empName1 = 'Bill'; // Compiler Error: Cannot change readonly 'empName'

let emp2: IEmployee = {
  empCode: 1,
  empName: 'Steve',
};

emp2.empCode = 100; // OK
emp2.empName = 'Bill'; // OK
