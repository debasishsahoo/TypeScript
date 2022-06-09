export {};
(function () {
  console.log('iife');
})();

let add1 = (x: number, y: number): number => {
  return x + y;
};

add1(2 + 5, 8);

let n: number = 45;
let m: number = 85;

let add2 = ((x: number, y: number): number => {
  return x + y;
})(n, m);

add2;
