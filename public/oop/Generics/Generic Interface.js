"use strict";
//Generic Interface as Function Type
let kv1 = { key: 1, value: "Steve" };
let kv2 = { key: 1, value: 12345 };
;
function processNumKeyPairs(key, value) {
    console.log('processNumKeyPairs: key = ' + key + ', value = ' + value);
}
function processStringKeyPairs(key, value) {
    console.log('processStringKeyPairs: key = ' + key + ', value = ' + value);
}
let numKVProcessor = processNumKeyPairs;
numKVProcessor(1, 12345);
let strKVProcessor = processStringKeyPairs;
strKVProcessor(1, "Bill");
;
function processKeyPairs(key, value) {
    console.log(`processKeyPairs: key = ${key}, value = ${value}`);
}
let numKVProcessor1 = processKeyPairs;
numKVProcessor(1, 12345);
let strKVProcessor2 = processKeyPairs;
strKVProcessor(1, "Bill");
;
class kvProcessor {
    process(key, val) {
        console.log(`Key = ${key}, val = ${val}`);
    }
}
let proc = new kvProcessor();
proc.process(1, 'Bill');
