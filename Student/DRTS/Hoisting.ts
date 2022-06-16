export {};

//function Hoisting
//calling function
abc(15);
//Declar Function
function abc(x: number): void {
  console.log(x);
}

abc(10);

//function is a first-Class-Citizion in javascript
function fcz(a: number, b: number): number {
  return a + b;
}

let x = fcz;
console.log('x:', x(5, 8));
