export {};

let x = function () {};

let y = () => {};

let z = () => console.log('Hello this Arrow Function');

let a = (x: number, y: number): number => {
  return x + y;
};

a(2, 5);
