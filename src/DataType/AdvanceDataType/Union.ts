//Union Types in Typescript allows a variable to have the ability to store a value of several types. We define union types by using a pipe (|) to separate each of the possible types. Hence, number | string | boolean is the type of a variable, which can have the value that can be a number, a string, or a boolean.
export {};
let a: number | string;  

a = 1;
console.log(typeof a); //number
console.log(a); //1
a = 'hello';
console.log(typeof a); //string
console.log(a); //hello

a = true; //Compile error Type 'true' is not assignable to type 'string | number'

//Union Types As Function Parameter
function sayHello(arg: number | string) {
  if (typeof arg == 'number') {
    console.log(typeof arg); //number
    console.log('Received a number');
  } else if (typeof arg == 'string') {
    console.log(typeof arg); //string
    console.log('Received a string');
  }
}

sayHello(10); //ok
sayHello('Hello'); //ok
sayHello(true);

function printMe(arg: string | string[]) {
  if (typeof arg == 'string') {
    console.log(arg);
  } else {
    var i: number = 0;
    for (i = 0; i < arg.length; i++) {
      console.log(arg[i]);
    }
  }
}

console.log('Printing String');
printMe('Rahul');
console.log('Printing Array');
printMe(['Rahul', 'Saurva', 'Sachin', 'Laxman']);

//Function Return Types
function someFn(arg: number): number | boolean {
  if (arg == 1) {
    return 1; //Ok
  }
  if (arg == 2) {
    return true; //ok
  }
  if (arg == 3) {
    return 'Hello'; //Type '"Hello"' is not assignable to type 'number | boolean'
  }
}

//Not just Primitives
class Product {
  ProductName: string;
  Code: string;
}
class Employee {
  EmployeeName: string;
  Code: string;
}

function getName(item: Product | Employee) {
  let desc: string;
  if (item instanceof Product) {
    desc = item.ProductName;
  } else {
    desc = item.EmployeeName;
  }
}

//Literal Types

function engine(value: 'start' | 'stop' | boolean) {
  if (value == 'start' || value == true) {
    //Start the Engine
    console.log('Start the Engine');
  }
  if (value == 'stop' || value == false) {
    //Stop the Engine
    console.log('Stop the Engine');
  }
}

engine('start'); //OK
engine(true); //OK
engine('stop'); //OK
engine(false); //OK

engine('Start'); //Argument of type '"Start"' is not assignable to parameter of type 'boolean | "start" | "stop"'

let str: string = 'start';
engine(str);
