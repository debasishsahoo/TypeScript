//The Logical operators operate on a set of operands and return one of the operands as a return value. It is typically used on boolean operands, in which case the return value is a boolean. If the operands and not boolean values, then logical operators may return a non-boolean value. The Typescript has four logical operators. They are AND (&& ), OR ( || ) , NOT (!) & Nullish coalescing operator (??).

//boolean data type, truthy & falsy
// he logical operators convert the operand to the boolean is a primitive type. The boolean represents a simple true/false value.

// Every possible value in Typescript can be converted to true & false. For Example, converting 100 to boolean will result in a true. And 0 becomes false.

// Those values, which converts to false are known as falsy. And those, which converts to true are Truthy.

// There are eight possible falsy values. They are

// false,
// 0 (zero),
// -0 (minus zero) ,
// 0n (BigInt zero) ,
// " " (empty string),
// null,
// undefined &
// NaN.

//|| (OR)
let a: number = 10;
let b: number = 15;

console.log(a > 5 || b > 5); //true
console.log(a > 5 || b < 5); //true although the b < 5 is false

let strVar: string = 'Hello';
let numVar: number = 100;

console.log(strVar || numVar); //Hello
console.log(numVar || strVar); //100

let option1, option2, option3;
console.log(option1 || option2 || option3 || 'Default'); //Default

option3 = 'option3';
console.log(option1 || option2 || option3 || 'Default'); //option3

console.log(a > 5 || b > 5 || b < a || a + b < 20); //true

console.log(true || false); //true
console.log(false || true); //true
console.log(true || true); //true
console.log(false || false); //false

//&& (AND)

console.log(a > 5 && b > 5); //true
console.log(a > 5 && b < 5); //false

console.log(strVar && numVar); //100
console.log(numVar && strVar); //Hello

console.log(option1 && option2 && option3); //undefined

option1 = 'option1';
option2 = 'option2';
option3 = 'option3';
console.log(option1 && option2 && option3); //option3

console.log(true && false); //false
console.log(false && true); //false
console.log(true && true); //true
console.log(false && false); //false

//! (NOT)
console.log(!true); // false
console.log(!0); // true

console.log(!'a'); //false
console.log(!!'a'); //true

console.log(Boolean('a')); //true

console.log(true || false); //falsealert is never evaluated

console.log(false || false);

//AND & OR together
// ( ) Parenthesis or Grouping
// ! Logical NOT
// == Equality
// != Not equal
// === Strict Equality
// !== Not strict Equal
// && logical AND
// || Logical OR
// ?? Nullish coalescing operator

console.log(true || (false && false));
console.log((true || false) && false);
