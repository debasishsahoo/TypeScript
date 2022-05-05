export {};
//If statement
let a: number = 1;
let b: number = 1;

if (a > 0 && b > 0) {
  console.log('Both a & b are greater than 0');
}

a = 0;
if (a > 0 && b > 0) {
  console.log('This is never executed as a is less than 0');
}

if (a > 0 && b > 0) {
  console.log('Both a & b are greater than 0');
}

//Truthy & falsy

a = 1;

if (a) {
  console.log('a is true');
}

b = 0;

if (b) {
  console.log('This is not executed');
}

// false,
// 0 (zero),
// -0 (minus zero) ,
// 0n (BigInt zero)
// " " (empty string),
// null
// undefined
// NaN.
a = 0;
if (a > 0) {
  console.log('a is greater than 0');
  //This will not
} else {
  console.log('a is less than or equal 0');
  //This will execute
}

let c = a > 0 ? 'a is greater than 0' : 'a is not greater than 0';
console.log(c);

//Multiple conditions using else if\
a = 10;

if (a > 10) {
  console.log('a is greater than 10');
} else if (a > 0 && a <= 10) {
  console.log('a is greater than 0 & less than 10');
} else if (a == 0) {
  console.log('a is equal 0');
} else {
  console.log('a is less than 0');
}

a = 25;

if (a > 10) {
  console.log('a is greater than 10');
} else if (a > 20) {
  //this will never execute even if it is true
  console.log('a is greater than 20');
} else {
  console.log('a s less than or equal to 10');
}

//Nested if
let val1: number = 20;
let val2: number = 10;
let operation = '<';

if (operation == '>') {
  console.log('greater than');

  if (val1 > val2) {
    console.log('Val1 > val2');
  } else {
    console.log('Val1 <= val1');
  }
} else if (operation == '<') {
  console.log('Less than');
  if (val1 < val2) {
    console.log('Val1 < val2');
  } else {
    console.log('Val1 >= val2');
  }
} else if (operation == '=') {
  console.log('Equal');

  if (val1 == val2) {
    console.log('Val1 = val2');
  } else {
    console.log('Val1 != val2');
  }
}
