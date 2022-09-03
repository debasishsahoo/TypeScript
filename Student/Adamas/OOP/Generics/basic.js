"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function abc(x) {
    return x;
}
// function abc<number>(x: number):number {
//     return x;
//}
let output1 = abc(5);
// function abc<string>(x: string):string {
//     return x;
//}
let output2 = abc('abc');
// function abc<boolean>(x: boolean):boolean {
//     return x;
//}
let output3 = abc(true);
