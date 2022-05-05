"use strict";
for (var i_1 = 0; i_1 < 10; i_1++) {
    if (i_1 == 6)
        break;
    console.log(i_1);
}
var num2 = 0;
while (num2 < 6) {
    if (num2 === 3) {
        break;
    }
    num2 = num2 + 1;
}
console.log(num2);
//Exapmple 1
var val1 = 20;
var val2 = 10;
var operation = '-';
console.log('switch example');
switch (operation) {
    case '+':
        console.log(val1 + val2);
        break;
    case '-':
        console.log(val1 - val2);
        break;
    case '*':
        console.log(val1 * val2);
        break;
    case '/':
        console.log(val1 / val2);
        break;
    default:
        console.log('Invalid operator');
}
console.log('switch finished');
var i = 0;
var j = 0;
var sum = 0;
for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        if (i == 6)
            break;
    }
}
outerloop: for (i = 0; i < 10; i++) {
    innerloop: for (j = 0; j < 10; j++) {
        if (i == 6)
            break outerloop;
    }
}
var count = 1;
outer: {
    inner: {
        console.log(count);
        break outer;
        count++;
        console.log(count);
    }
    count++;
    console.log(count);
}
console.log(count);
var z = 0;
blk1: {
    console.log(z);
    break blk2;
}
blk2: {
    console.log(z);
}
console.log(z); //1
