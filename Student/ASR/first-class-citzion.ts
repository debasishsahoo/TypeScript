export {};
function abc(a: number, b: number): number {
  return a + b;
}

let x = abc;

console.log(' x:', x(5, 8));
