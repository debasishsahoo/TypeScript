"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatAmmount(money) {
    var formatAmmount = 'Rs. ' + parseInt(money);
}
function formatAmmount2(money) {
    if (typeof money == 'string') {
        var formatAmmount_1 = 'Rs. ' + parseInt(money);
    }
    else {
        var formatAmmount_2 = 'Rs. ' + money;
    }
}
