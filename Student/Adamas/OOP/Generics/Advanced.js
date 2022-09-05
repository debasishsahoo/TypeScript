"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ABC(args) {
    return args;
}
// function ABC<string>(args: string): string {
//     return args;
//   }
let x = ABC('ABC');
console.log('x:', x);
// function ABC<number>(args: number): number {
//     return args;
//   }
let y = ABC(10);
console.log('x:', y);
// function ABC<number>(args: number): number {
//     return args;
//   }
let z = ABC(true);
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
function getArray(items) {
    return new Array().concat(items);
}
let myNum = getArray([100, 123, 134]);
let myStr = getArray(['poka', 'Eagle', 'Hulo']);
myNum.push(456);
myStr.push('Bobcat');
myNum.push('fox');
console.log('myNum:', myNum);
myStr.push(1234);
console.log('myStr:', myStr);
//----------------------------------------------------------------------
function DisplayType(id, name, isMale) {
    console.log(`${id} and ${name} ,${isMale}`);
}
DisplayType(12, 'Deb', true);
//Gen with Non- Gen
function displayType(id, name) {
    console.log(`${id} and ${name}`);
}
displayType(12, 'Deb');
function Type1(id, name) {
    id.toString();
    id.toFixed();
    name.toUpperCase();
    name.toString();
}
Type1('abc', 'deb');
Type1(1, 2);
//-------------------------------------------
class Person {
    constructor(fn, ln) {
        this.fn = fn;
        this.ln = ln;
    }
}
function Display(args) {
    console.log(`${args.fn}  and ${args.ln}`);
}
let MySelf = { fn: 'Deb', ln: 'Sahoo' };
Display(MySelf);
