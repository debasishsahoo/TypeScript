"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
var k = 100;
do {
    console.log(k);
    k++;
} while (k < 105);
//Use Break to break
var j = 200;
do {
    console.log(j);
    j++;
    if (j > 205)
        break;
} while (true);
