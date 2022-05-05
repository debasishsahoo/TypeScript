"use strict";
var i = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    console.log(i);
}
for (let i = 0; i < 5; i++) {
    if (i == 3)
        continue;
    console.log(i);
}
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (j == 2)
            continue;
        console.log(i + ' ' + j);
    }
}
outerloop: for (let i = 0; i < 4; i++) {
    innerloop: for (let j = 0; j < 4; j++) {
        if (j == 2)
            continue outerloop;
        console.log(i + ' ' + j);
    }
}
