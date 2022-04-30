export {};
//Where String is parameter datatype and void is the return type

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
