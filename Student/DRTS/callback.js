"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isoddnum = (arg) => {
    return arg % 2;
};
let isevennum = (arg) => {
    return arg % 2 == 0;
};
let oddnumber = isoddnum(5);
console.log('oddnumber:', oddnumber);
//with loops
for (let i = 0; i < 10; i++) {
    if (isoddnum(x[i]) == 1) {
        console.log(x[i] + ':', isoddnum(x[i]));
    }
}
//using filter
let oddnumbers = x.filter(isoddnum);
console.log('oddnumbers:', oddnumbers);
let eventnumbers = x.filter(isevennum);
console.log('oddnumbers:', eventnumbers);
//Using ES6
let oddnum = x.filter((e) => e % 2);
console.log('oddnum:', oddnum);
let evennum = x.filter((a) => a % 2 == 0);
console.log('evennum:', evennum);
