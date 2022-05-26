"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
let k = 100;
do {
    console.log(k);
    k++;
} while (k < 105);
//Use Break to break
let j = 200;
do {
    console.log(j);
    j++;
    if (j > 205)
        break;
} while (true);
