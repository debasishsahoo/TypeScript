export {};

function display() {
  throw new Error('error');
}

//display();

function dosum(x: number, y: number): number {
  return x + y;
}

//dosum('deb', 'sahoo');

//Anonymous function
let x = function (a: number, b: number): number {
  return a * b;
};

x(2, 8);

//Optional Parameter
let y = function (a: string, b?: string): string {
  return a + ' ' + b;
};

y('Hello');

//default parameter
let z = function (a: string, b: string = 'deb'): string {
  return a + ' ' + b;
};

console.log('z:', z('Hello'));

console.log('z:', z('Hello', 'sayan'));
