export {};
//Less than (<)
//Number Example
let x: number = 10;
console.log(x < 20); //true
console.log(x < 15); //true
console.log(x < 10); //false
console.log(x < 5); //false
//String Examples 
let y: string = 'Hello';
//72<72
console.log(y < 'I'); //true
console.log(y < 'Hello'); //false
console.log(y < 'H'); //false
console.log(y < 'J'); //true

//Greater than (>)
//Number Example
console.log(x > 20); //false
console.log(x > 15); //false
console.log(x > 10); //false
console.log(x > 5); //true

//String Examples
console.log(y > 'I'); //false
console.log(y > 'Hello'); //false
console.log(y > 'H'); //true
console.log(y > 'J'); //false

//Less than or equal (<=)
//Number Example
console.log(x <= 20); //true
console.log(x <= 15); //true
console.log(x <= 10); //true
console.log(x <= 5); //false

//String Examples

console.log(y <= 'I'); //true
console.log(y <= 'Hello'); //true
console.log(y <= 'H'); //false
console.log(y <= 'J'); //true

//Greater than or equal (>=)
//Number Example
console.log(x >= 20); //false
console.log(x >= 15); //false
console.log(x >= 10); //true
console.log(x >= 5); //true

//String Examples

console.log(y >= 'I'); //false
console.log(y >= 'Hello'); //true
console.log(y >= 'H'); //true
console.log(y >= 'J'); //false

//////////////////////////////////////////////////////////////////

// number comparison.  The non number operand is converted to number

console.log(10 > '5'); //true

console.log(2 > true); //true     // true is 1
console.log(1 > false); //true     // false is 0
console.log(1 > ''); //true     // "" is 0
console.log(1 > ' '); //true     // " " is 0
console.log(1 > null); //true     // null 0

console.log(10 > 'a'); //false
console.log(10 > NaN); //false
console.log(10 > undefined); //false

let date1: Date = new Date();
let date2: Date = new Date();

console.log(date1 > date2); //false
console.log(date1 < date2); //false

console.log(date1 >= date2); //true
console.log(date1 <= date2); //true

//Only Equality does not work. Becuase they are objects
console.log(date1 == date2); //false
console.log(date1 === date2); //false

date1 = new Date('2020-11-01');
date2 = new Date('2020-11-20');

console.log(date1 > date2); //false
console.log(date1 < date2); //true

console.log(date1 >= date2); //false
console.log(date1 <= date2); //true

//Only Equality does not work. Because they are objects
console.log(date1 == date2); //false
console.log(date1 === date2); //false
