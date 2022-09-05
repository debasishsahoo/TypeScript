export {};

function ABC<T>(args: T): T {
  return args;
}
// function ABC<string>(args: string): string {
//     return args;
//   }
let x = ABC<string>('ABC');
console.log('x:', x);
// function ABC<number>(args: number): number {
//     return args;
//   }
let y = ABC<number>(10);
console.log('x:', y);

// function ABC<number>(args: number): number {
//     return args;
//   }
let z = ABC<boolean>(true);
console.log('x:', z);

//--------------------------------------------------------------
// function getArray(items: any[]): any[] {
//   return new Array().concat(items);
// }

// let myNum = getArray([100, 123, 134]);
// let myStr = getArray(['poka', 'Eagle', 'Hulo']);

// myNum.push(456);
// myStr.push('Bobcat');

// myNum.push('fox');
// console.log('myNum:', myNum);
// myStr.push(1234);
// console.log('myStr:', myStr);

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
let myNum = getArray<number>([100, 123, 134]);
let myStr = getArray<string>(['poka', 'Eagle', 'Hulo']);
myNum.push(456);
myStr.push('Bobcat');
myNum.push('fox');
console.log('myNum:', myNum);
myStr.push(1234);
console.log('myStr:', myStr);
//----------------------------------------------------------------------

function DisplayType<N, S, B>(id: N, name: S, isMale: B): any {
  console.log(`${id} and ${name} ,${isMale}`);
}

DisplayType<number, string, boolean>(12, 'Deb', true);

//Gen with Non- Gen
function displayType<N>(id: N, name: string): any {
  console.log(`${id} and ${name}`);
}
displayType<number>(12, 'Deb');

function Type1<T, U>(id: T, name: U): any {
  id.toString();
  id.toFixed();
  name.toUpperCase();
  name.toString();
}

Type1<string, string>('abc', 'deb');
Type1<number, number>(1, 2);

//-------------------------------------------

class Person {
  fn: string;
  ln: string;
  constructor(fn: string, ln: string) {
    this.fn = fn;
    this.ln = ln;
  }
}

function Display<T extends Person>(args: T): void {
  console.log(`${args.fn}  and ${args.ln}`);
}

let MySelf: Person = { fn: 'Deb', ln: 'Sahoo' };

Display(MySelf);
