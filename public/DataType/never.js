"use strict";
// function throwError(errorMsg: string): never {
//   throw new Error(errorMsg);
// }
// function KeepProcessing(): never {
//   while (true) {
//     console.log('I always dose something and never Ends');
//   }
// }
// throwError('This an error');
// //KeepProcessing();
// //void and Never******
// let sagnik: void = undefined;
// let Sourav: never;
//methods
function SayHi() {
    console.log('HI');
}
let speech = SayHi();
console.log('speech:', speech);
