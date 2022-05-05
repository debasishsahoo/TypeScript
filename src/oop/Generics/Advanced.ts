function getArray(items: any[]): any[] {
  return new Array().concat(items);
}
let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(['Hello', 'World']);

myNumArr.push(400);
myStrArr.push('Hello TypeScript');

myNumArr.push('Hi');
myStrArr.push(500);

console.log(myNumArr);
console.log(myStrArr);

function getArray1<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let myNumArr1 = getArray1<number>([100, 200, 300]);
let myStrArr1 = getArray1<string>(['Hello', 'World']);

myNumArr1.push(400); // OK
myStrArr1.push('Hello TypeScript'); // OK

myNumArr1.push('Hi'); // Compiler Error
myStrArr1.push(500); // Compiler Error

//Multiple Type Variables
function displayType<T, U>(id: T, name: U): void {
  console.log(typeof id + ', ' + typeof name);
}

displayType<number, string>(1, 'Steve'); // number, string
//Generic with Non-generic Type
function DisplayType<T>(id: T, name: string): void {
  console.log(typeof id + ', ' + typeof name);
}
//Methods and Properties of Generic Type
DisplayType<number>(1, 'Steve'); // number, string

function displayType1<T, U>(id: T, name: U): void {
  id.toString(); // OK
  name.toString(); // OK

  id.toFixed(); // Compiler Error: 'toFixed' does not exists on type 'T'
  name.toUpperCase(); // Compiler Error: 'toUpperCase' does not exists on type 'U'

  console.log(typeof id + ', ' + typeof name);
}
//Generic Array Methods

function displayNames<T>(names: T[]): void {
  console.log(names.join(', '));
}

displayNames<string>(['Steve', 'Bill']); // Steve, Bill
//Constraints
class Person {
  firstName: string;
  lastName: string;

  constructor(fname: string, lname: string) {
    this.firstName = fname;
    this.lastName = lname;
  }
}

function display<T extends Person>(per: T): void {
  console.log(`${per.firstName} ${per.lastName}`);
}
var per = new Person('Bill', 'Gates');
display(per); //Output: Bill Gates

display('Bill Gates'); //Compiler Error
