export {};
//Union
let a: number | string;

a = 1;
console.log(typeof a);
console.log(a);

a = 'Hello';
console.log(typeof a);
console.log(a);

function fun(arg: number | string | number[]): boolean | void {
  if (typeof arg === 'number') {
    return true;
  } else if (typeof arg === 'string') {
    console.log('String');
  } else if (typeof arg === 'object') {
    for (let i in arg) {
      console.log(arg[i]);
    }
  } else {
    return false;
  }
}

fun(1);
fun('a');

class Product {
  name: string;
  code: number;
  constructor(n: string, c: number) {
    this.name = n;
    this.code = c;
  }
}

class Student {
  name: string;
  code: number;
  constructor(n: string, c: number) {
    this.name = n;
    this.code = c;
  }
}

function getName(item: Product | Student) {
  let desc: string;

  if (item instanceof Product) {
    desc = `${item.name} and ${item.code}`;
  } else if (item instanceof Student) {
    desc = `${item.name} and ${item.code}`;
  } else {
    desc = 'Nothing Found';
  }
}

function Engine(arg: true | false | 'START' | 'Stop' | 1 | 0): void {
  if (arg == 'START' || arg == true || arg == 1) {
    console.log('Engine Start');
  }

  if (arg == 'Stop' || arg == false || arg == 0) {
    console.log('Engine Stop');
  }
}
console.log('start'.toUpperCase());
let xyz = 'start'.toUpperCase();
console.log('xyz:', xyz);

Engine(xyz);
