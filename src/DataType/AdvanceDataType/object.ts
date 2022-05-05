export {};
let Employee: {
  firstname: String;
  lastname: String;
  age: number;
  jobtitle: String;
};

Employee = {
  firstname: 'Debasish',
  lastname: 'Sahoo',
  age: 35,
  jobtitle: 'Complicated',
};

console.log('Employee:', Employee.firstname);

let employee: {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
} = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  jobTitle: 'Web Developer',
};

let vacant: {};
vacant.firstName = 'John';

let vacant: {} = {};

console.log(vacant.toString());
