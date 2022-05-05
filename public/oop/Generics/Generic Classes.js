"use strict";
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, val) {
        this.key = key;
        this.val = val;
    };
    KeyValuePair.prototype.display = function () {
        console.log("Key = ".concat(this.key, ", val = ").concat(this.val));
    };
    return KeyValuePair;
}());
var kvp1 = new KeyValuePair();
kvp1.setKeyValue(1, 'Steve');
kvp1.display(); //Output: Key = 1, Val = Steve
var kvp2 = new KeyValuePair();
kvp2.setKeyValue('CEO', 'Bill');
kvp2.display(); //Output: Key = CEO, Val = Bill
var kvProcessor1 = /** @class */ (function () {
    function kvProcessor1() {
    }
    kvProcessor1.prototype.process = function (key, val) {
        console.log("Key = ".concat(key, ", val = ").concat(val));
    };
    return kvProcessor1;
}());
var proc1 = new kvProcessor1();
proc1.process(1, 'Bill'); //Output: key = 1, value = Bill
