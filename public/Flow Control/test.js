"use strict";
outerloop: for (var i_1 = 0; i_1 < 10; i_1++) {
    innerloop: for (var j_1 = 0; j_1 < 10; j_1++) {
        console.log(i_1, j_1);
        if (i_1 == 6)
            break outerloop;
    }
}
