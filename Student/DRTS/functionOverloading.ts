export {};
function add(a: string, b: string): string;

function add(a: number, b: number): number;

function add(a: number, b: number, c: number): number;

function add(a: any, b: any, c?: any): any {
  return a + b;
}

console.log(add('Tanu ', 'Ruma'));

console.log(add(2, 5));

console.log(add(2, 5, 5));

function display(a: string, b: string): string;
function display(a: number, b: number): number;

function display(a: any, b: any, c: any): any {
  return a + b;
}

console.log(display('abc ', 'efg'));

console.log(display(7, 9));

// function greet(x: string): string {
//   return `Hello ,${x}`;
// }

// let xh1: string = greet('Debasish ');

// console.log('xh1:', xh1);

function greet(x: string | number | boolean | null): any {
  return `Hello ,${x}`;
}

let xh1: string = greet('Debasish ');
console.log('xh1:', xh1);

let xh2: string = greet(5);
console.log('xh2:', xh2);

let xh3: string = greet(false);
console.log('xh3:', xh3);

let xh4: string = greet(null);
console.log('xh4:', xh4);

function newx(x: string): string;
function newx(x: number): number;
function newx(x: boolean): boolean;
function newx(x: null): null;
function newx(x: string[]): string[];

function newx(x: any): any {
  return x;
}

function newy(y: string | number | boolean | null | string[]): any {}
