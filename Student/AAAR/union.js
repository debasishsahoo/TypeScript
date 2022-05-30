"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a;
function sayhi(arg) {
    return 10;
}
//Literal Type
function engine(value) {
    if (value === 'start' || value === true || value === 1 || value === 'on') {
        console.log('Start Engine');
    }
    if (value === 'stop' || value === false || value === 0 || value === 'off') {
        console.log('Stop Engine');
    }
}
