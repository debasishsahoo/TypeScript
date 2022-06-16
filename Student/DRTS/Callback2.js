"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Show() {
    console.log('hi this is function');
}
function Demo(callback) {
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
function ShowResult(result) {
    console.log(`The Result is ${result}`);
}
function Calculaters(x, y, options) {
    if (options == '+') {
        ShowResult(x + y);
    }
    else if (options == '-') {
        ShowResult(x - y);
    }
    else if (options == '*') {
        ShowResult(x * y);
    }
    else if (options == '/') {
        ShowResult(x / y);
    }
    else {
        console.log('Invalid');
    }
}
Calculaters(5, 8, '+');
function op(x, a, b) {
    return x == '+' ? a + b : x == '-' ? a - b : x == '*' ? a * b : a / b;
}
function show(options, m, n) {
    console.log(op(options, m, n));
}
show('-', 45, 5);
