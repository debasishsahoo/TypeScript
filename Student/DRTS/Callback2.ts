export {};
function Show(): void {
  console.log('hi this is function');
}
function Demo(callback: Function): void {
  callback();
}
Demo(Show);

/* function Calculaters(x: number, y: number, options: string): void {
  if (options == '+') {
    console.log(' x + y:', x + y);
  } else if (options == '-') {
    console.log(' x - y:', x - y);
  } else if (options == '*') {
    console.log(' x * y:', x * y);
  } else if (options == '/') {
    console.log(' x / y:', x / y);
  } else {
    console.log('Invalid');
  }
} */

function ShowResult(result: number): void {
  console.log(`The Result is ${result}`);
}
function Calculaters(x: number, y: number, options: string): void {
  if (options == '+') {
    ShowResult(x + y);
  } else if (options == '-') {
    ShowResult(x - y);
  } else if (options == '*') {
    ShowResult(x * y);
  } else if (options == '/') {
    ShowResult(x / y);
  } else {
    console.log('Invalid');
  }
}

Calculaters(5, 8, '+');

function op(x: string, a: number, b: number): number {
  return x == '+' ? a + b : x == '-' ? a - b : x == '*' ? a * b : a / b;
}

function show(options: string, m: number, n: number) {
  console.log(op(options, m, n));
}

show('-', 45, 5);
