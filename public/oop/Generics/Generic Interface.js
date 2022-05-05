"use strict";
//Generic Interface as Function Type
var kv1 = { key: 1, value: "Steve" };
var kv2 = { key: 1, value: 12345 };
;
function processNumKeyPairs(key, value) {
    console.log('processNumKeyPairs: key = ' + key + ', value = ' + value);
}
function processStringKeyPairs(key, value) {
    console.log('processStringKeyPairs: key = ' + key + ', value = ' + value);
}
var numKVProcessor = processNumKeyPairs;
numKVProcessor(1, 12345);
var strKVProcessor = processStringKeyPairs;
strKVProcessor(1, "Bill");
;
function processKeyPairs(key, value) {
    console.log("processKeyPairs: key = ".concat(key, ", value = ").concat(value));
}
var numKVProcessor1 = processKeyPairs;
numKVProcessor(1, 12345);
var strKVProcessor2 = processKeyPairs;
strKVProcessor(1, "Bill");
;
var kvProcessor = /** @class */ (function () {
    function kvProcessor() {
    }
    kvProcessor.prototype.process = function (key, val) {
        console.log("Key = ".concat(key, ", val = ").concat(val));
    };
    return kvProcessor;
}());
var proc = new kvProcessor();
proc.process(1, 'Bill');
