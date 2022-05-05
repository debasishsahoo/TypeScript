export {};
interface IPerson {
  firstName: string;
  lastName: string;
  sayHi: () => string;
}

let customer: IPerson = {
  firstName: 'Ajay',
  lastName: 'Laddha',
  sayHi: (): string => {
    return 'Hi';
  },
};

console.log('Customer Object Details: ');
console.log(customer.sayHi());
console.log(customer.firstName);
console.log(customer.lastName);

var employee: IPerson = {
  firstName: 'Vikas',
  lastName: 'Jainer',
  sayHi: (): string => {
    return 'Hello';
  },
};

console.log('Employee  Object Details: ');
console.log(employee.sayHi());
console.log(employee.firstName);
console.log(employee.lastName);
