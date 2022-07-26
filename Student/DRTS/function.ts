//Normal Function
function fun() {
  console.log('Hello TypeScript');
}

fun();

//Argumented Function

function Sum(x: number, y: number) {
  return x + y;
}

console.log('Sum(2,5):', Sum(2, 5));

//Anonymous Function
let greet = function () {
  console.log('Hello TypeScript');
};

greet();

//function Parameter
let add = function (x: number, y: number) {
  return x + y;
};

console.log('add(5, 6):', add(5, 6));

console.log('add(5, 6):', add(6));

console.log('add(5, 6):', add(5, 6, 7));

//Optinal Parameter
let add1 = function (x: number, y?: number) {
  return x + y;
};

console.log('add(5, 6):', add1(5, 6));

console.log('add(5, 6):', add1(6));

//Default Parameter
let add2 = function (x: number, y: number = 0) {
  return x + y;
};

console.log('add(5, 6):', add2(5, 6));

console.log('add(5, 6):', add2(6));
