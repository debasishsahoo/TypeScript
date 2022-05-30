"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatAmmount(money) {
    let formatAmmount = 'Rs. ' + parseInt(money);
}
function formatAmmount2(money) {
    if (typeof money == 'string') {
        let formatAmmount = 'Rs. ' + parseInt(money);
    }
    else {
        let formatAmmount = 'Rs. ' + money;
    }
}
