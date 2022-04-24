"use strict";
function raiseError(msg) {
    throw new Error(msg);
}
raiseError('Deb');
function fn(a) {
    if (typeof (a === "string")) {
        return true;
    }
    else if (typeof (a === "number")) {
        return false;
    }
    else {
        return false;
    }
}
