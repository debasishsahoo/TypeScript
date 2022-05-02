//instanceof is an operator in TypeScript, which checks if an object is an instance of a specific class or a constructor function. The Instanceof also takes inheritance into account. It returns true if the object inherits from the class’s prototype. instanceof also acts as a Type Guard, helping us infer the type correctly in the scope.
export {};
class Person {
  name: string = '';
}

let person = new Person();

console.log(person instanceof Person); // true
console.log(person instanceof Object); // true

let arr = [1, 2, 3];
console.log(arr instanceof Array); // true

let reg: RegExp = new RegExp('/abc/');
console.log(reg instanceof RegExp); // true

let abc = function abc() {};
console.log(abc instanceof Object); // true

console.log(abc instanceof Function); // true

//But it will not work on primitive types. It will result in both compile-time and run-time errors.

let numVar: number = 3;
let strVar: string = 'Hello';
let boolVar: boolean = true;

//console.log(numVar instanceof number); //Error
//console.log(strVar instanceof string); //Error
//console.log(boolVar instanceof boolean); //Error

//The left-hand side of an ‘instanceof’ expression must be of type ‘any’, an object type, or a type parameter.

class Employee extends Person {}
class Customer extends Person {}
class SalesPerson extends Employee {}

let employee = new Employee();
let customer = new Customer();
let salesPerson = new SalesPerson();

if (person instanceof Person) console.log('person == Person'); //True
if (person instanceof Employee) console.log('person == Employee');
if (person instanceof Customer) console.log('person == Customer');
if (person instanceof SalesPerson) console.log('person == SalesPerson');

if (employee instanceof Person) console.log('employee == Person'); //True
if (employee instanceof Employee) console.log('employee == Employee'); //True
if (employee instanceof Customer) console.log('employee == Customer');
if (employee instanceof SalesPerson) console.log('employee == SalesPerson');

if (customer instanceof Person) console.log('customer == Person'); //True
if (customer instanceof Employee) console.log('customer == Employee');
if (customer instanceof Customer) console.log('customer == Customer'); //True
if (customer instanceof SalesPerson) console.log('customer == SalesPerson');

if (salesPerson instanceof Person) console.log('salesPerson == Person'); //True
if (salesPerson instanceof Employee) console.log('salesPerson == Employee'); //True
if (salesPerson instanceof Customer) console.log('salesPerson == Customer');
if (salesPerson instanceof SalesPerson)
  console.log('salesPerson == SalesPerson'); //True

//InstanceOf As Type Guard
class Customer1 extends Person {
  code() {
    console.log('Customer1 Code');
  }
  buy() {
    console.log('Bought');
  }
}
class SalesPerson1 extends Person {
  code() {
    console.log('SalesPerson1 Code');
  }
  sell() {
    console.log('Sold');
  }
}

function getCode1(obj: Person) {
  obj.code(); //Property 'code' does not exist on type 'Person'
}
function getCode2(obj: Person) {
  (obj as any).code();
}

function getCode3(obj: Person) {
  if (obj instanceof Customer) {
    obj.code();
  } else if (obj instanceof SalesPerson) {
    obj.code();
  }
}
function BuySell1(obj: Person) {
  if (obj instanceof Customer) {
    obj.buy();
  } else if (obj instanceof SalesPerson) {
    obj.sell();
  }
}
function BuySell2(obj: Person) {
  obj.code(); //Property 'code' does not exist on type 'Person'

  if (obj instanceof Customer) {
    obj.sell(); //Property 'sell' does not exist on type 'Customer'
  } else if (obj instanceof SalesPerson) {
    obj.buy(); //Property 'buy' does not exist on type 'SalesPerson'
  }
}

getCode1(new Customer());
getCode2(new Customer());
getCode3(new Customer()); //Customer Code
getCode3(new SalesPerson()); //SalesPerson Code
BuySell1(new Customer());
BuySell1(new SalesPerson());
BuySell2(new Customer());
BuySell2(new SalesPerson());
