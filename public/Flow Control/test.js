"use strict";
outerloop: for (let i = 0; i < 10; i++) {
    innerloop: for (let j = 0; j < 10; j++) {
        console.log(i, j);
        if (i == 6)
            break outerloop;
    }
}
