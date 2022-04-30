function foo(x?: string) {
  console.log(x);
}

foo();

function foo1(x: undefined) {
  console.log(x); //undefined
}

foo1();

const cars: string[] = ['Saab', 'Volvo', 'BMW'];

console.log(cars[5]);

let myVar = undefined;
console.log('myVar:', myVar);

let num: undefined; //num variable is of type undefined

console.log(num); //undefined
console.log(typeof num); //undefined

console.log(undefined); //undefined
console.log(typeof undefined); //undefined

console.log(globalThis.undefined); //undefined
console.log(typeof globalThis.undefined);

abc();

function abc() {
  var undefined = 10;
  console.log(undefined); //10
  console.log(typeof undefined); //number
}

let a8: undefined;
console.log(a8 === undefined); //true

let a9: undefined;

console.log(typeof a9 === 'undefined');

let a10: undefined;

//loose equality check

console.log(a10 == false); //false
console.log(a10 == true); //false

//Strict equality check

console.log(a10 === false); //false
console.log(a10 === true);

let a11 = 10;
let b11;

console.log(a11 + b11); //NaN
console.log(Number(b11)); //NaN
