interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  gender: string;
  empCode: number;
}
let empObject = <Employee>{};
empObject.name = 'Abhishek';
empObject.age = 25;
empObject.gender = 'Male';
empObject.empCode = 43;
console.log('Name: ' + empObject.name);
console.log('Employee Code: ' + empObject.empCode);
