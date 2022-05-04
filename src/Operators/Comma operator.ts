//The comma operator separates each of its operands and evaluates all of them from left to right. It returns the value of the last operand.
export {};
let x: number = 1;
let y: number = 10;

x = (x++, y++, x + y);
//Comma Operator

console.log(x); //13

x = 1;

x = (2, 4, 5);
console.log(x); //5

let a: number = 100;
let b: number = 100;

console.log(addNum(a, b)); //200

//Using Comma to add expressions
console.log(addNum((a++, (a += b), a), (a++, b))); // 302

function addNum(a: number, b: number) {
  return a + b;
}
