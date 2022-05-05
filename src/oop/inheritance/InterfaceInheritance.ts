interface IPerson {
  age: number;
  name: string;
}

interface IEmployee {
  empId: string;
}

interface Engineer extends IPerson, IEmployee {}

var EnggObj: Engineer = { name: 'Asmita', age: 32, empId: 'EMP023' };
console.log('Name:  ' + EnggObj.name);
console.log('Age:  ' + EnggObj.age);
console.log('Emp Id:  ' + EnggObj.empId);
