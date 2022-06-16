"use strict";
let pow = (a, b) => {
    if (b == 1) {
        return a;
    }
    else {
        return a * pow(a, b - 1);
    }
};
console.log(pow(2, 3));
let fact = (x) => {
    let res = 1;
    for (let i = x; i > 1; i--) {
        res *= i;
    }
    return res;
};
console.log(fact(3));
