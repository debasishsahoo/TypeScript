// defining interface for class
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  FullName();
  GetAge();
}
// implementing the interface
class Employee implements Person {
  firstName: string;
  lastName: string;
  age: number;
  FullName() {
    return this.firstName + ' ' + this.lastName;
  }
  GetAge() {
    return this.age;
  }
  constructor(firstN: string, lastN: string, getAge: number) {
    this.firstName = firstN;
    this.lastName = lastN;
    this.age = getAge;
  }
}
// using the class that implements interface
let myEmployee = new Employee('Abhishek', 'Mishra', 25);
let fullName = myEmployee.FullName();
let Age = myEmployee.GetAge();
console.log('Name of Person: ' + fullName + '\nAge: ' + Age);
