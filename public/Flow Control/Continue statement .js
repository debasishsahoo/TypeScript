"use strict";
var i = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    console.log(i);
}
for (var i_1 = 0; i_1 < 5; i_1++) {
    if (i_1 == 3)
        continue;
    console.log(i_1);
}
for (var i_2 = 0; i_2 < 4; i_2++) {
    for (var j_1 = 0; j_1 < 4; j_1++) {
        if (j_1 == 2)
            continue;
        console.log(i_2 + ' ' + j_1);
    }
}
outerloop: for (var i_3 = 0; i_3 < 4; i_3++) {
    innerloop: for (var j_2 = 0; j_2 < 4; j_2++) {
        if (j_2 == 2)
            continue outerloop;
        console.log(i_3 + ' ' + j_2);
    }
}
