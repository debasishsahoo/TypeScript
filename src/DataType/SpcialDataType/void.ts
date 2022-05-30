export {};
//Where String is parameter datatype and void is the return type

//Assigning to void
let a1: void;
a1 = undefined;

let a: void;
a = 'test';

a: undefined;
let b: void;

b = a;
a = b;

//void vs undefined

//If a function type specifies return type void when implemented, can return any other value, but it will be ignored. The behavior is useful for advanced callback patterns

type voidFunc = () => void;

const f1: voidFunc = () => {
  return 10;
};
const f2: voidFunc = () => true;
const f3: voidFunc = function () {
  return 'Hello';
};
//v1, v2 & v3 are of type void
const v1 = f1();
const v2 = f2();
const v3 = f3();
console.log(v1); //10
console.log(v2); //true
console.log(v3); //hello
//Since v1,v2 & v3 are voids you cannot use them
v1 + 10; //not ok
//Operator '+' cannot be applied to types 'void' and 'number'
(v1 as number) + 10; //not ok

//Conversion of type 'void' to type 'number' may be a mistake
//because neither type sufficiently overlaps with the other.
//If this was intentional, convert the expression to 'unknown' first.

type voidFunc1 = () => undefined;

const f1: voidFunc1 = () => {
  return 10;
};

function log(x: number | string | boolean | void): string | number {
  console.log(x);
  return 5;
}

log(5);
log('Sahoo');
log(true);
log(undefined);

//public static void main() this main function return nothing

let useless: void = undefined;

//useless = 1;

console.log('useless:', useless);

let a: void;
let b: undefined;
a = undefined;
a = 'test';

b = a; //ok

a = b;
