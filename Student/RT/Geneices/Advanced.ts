export {};
function getArray(item: any[]): any[] {
  return new Array().concat(item);
}

let x = getArray([1, 2, 3, 4]);
let y = getArray(['Hello', 'World']);
let z = getArray([null, null, null, null]);

x.push(12);
x.push('Rumana');
console.log('x:', x);

y.push('Typescript');
y.push(45);
console.log('y:', y);

z.push(10);
z.push('a');
console.log('z:', z);

function getarray<T>(item: T[]): T[] {
  return new Array().concat(item);
}

let x1 = getarray<number>([1, 2, 3, 4]);
let y1 = getarray<string>(['Hello', 'World']);
let z1 = getarray<null>([null, null, null, null]);

x1.push(12);
x1.push('Rumana');

function Details<N, S, A>(id: N, name: S, marks: A[]): string {
  return `${id},${name},${marks}`;
}

let a = Details<number, string, number>(1, 'Rumana', [1, 2, 3, 4, 5]);

function Details1<T>(id: T, name: string): string {
  return `${id},${name}`;
}

let b = Details1<number>(12, 'Tanusree');

class Person {
  fn: string;
  ln: string;
  constructor(a: string, b: string) {
    this.fn = a;
    this.ln = b;
  }
}

function fun<T extends Person>(arg: T): void {
  console.log(`${arg}`);
}

let s = new Person('Tanusree', 'Maji');

fun(s);
