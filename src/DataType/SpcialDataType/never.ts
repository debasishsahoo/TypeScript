export {};
//The Typescript Never type represents the type that never happens or the values that never occur. The following are such places where we use the never type. never type represent a state which shouldn’t exist
//methods

function SayHi(): void {
  console.log('HI');
}

let speech: void = SayHi();
console.log('speech:', speech);

//Characteristics of Never

let n1: never;
let v1: any;
let v2: number;
let v3: string;
let v4: boolean;
let v5: {};

//v1 = n1;
// v2 = n1;
// v3 = n1;
// v4 = n1;
// v5 = n1;

//The following results in an error
n1 = v1;
n1 = v2;
// n1 = v3;
// n1 = v4;
// n1 = v5;

//The Typescript infers the return type as never if a function expression or arrow function.

//has no return type annotation
//has no return statement
//Or has a return statement which returns never
//does not have an endpoint

let x = function (message: any): never {
  throw new message();
};

// //arrow function

let y = (message: any): never => {
  throw new message();
};

let x1 = function (message: any): never {
  throw new message();
};

// // f a function has its return type annotated with never.
// //All of its return statements (if any) must return never
// //The endpoint of the function must not be reachable.

// function x1(message): never {
//   return message;
// }

// function x2(message): never {
//   let y = message;
// }

//Void Vs Never
//We use void when the function does return but does not return a value. The typescript infers the return value as void.
//We use void when the function does return but does not return a value.
let z: void = (a: number, b: number): void => {
  let c = a + b;
};
//The never return type when the function does not return at all.
z = function infiniteLoop() {
  while (true) {}
};
