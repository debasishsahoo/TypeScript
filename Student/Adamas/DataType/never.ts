export {};

let a: never;

function SayHi(): never {
  console.log('Hi');
  //throw new Error();
  return a;
  console.log('Hi');
}

let x = function (): never {
  throw new Error();
};

x();

let y = (): never => {
  throw new Error();
};
y();
