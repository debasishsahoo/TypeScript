export {};

let a: number; // no memory allocation

console.log('a:', a);





//Optinal Parameter
function xyz(a?: number) {
  console.log('a:', a);
  return a;
}
console.log(xyz());
