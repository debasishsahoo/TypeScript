"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class keyValuePair {
    constructor(KEY, VAL) {
        this.key = KEY;
        this.Val = VAL;
    }
    display() {
        console.log(`Key=${this.key} and Val=${this.Val}`);
    }
}
let KVP1 = new keyValuePair(1, 'Sourav');
KVP1.display();
let KVP2 = new keyValuePair('A', 'Tanisha');
KVP2.display();
class KV {
    process(key, val) {
        console.log(`Key = ${key}, val = ${val}`);
    }
}
let proc1 = new KV();
let proc2 = new KV();
let proc3 = new KV();
let proc4 = new KV();
proc1.process(1, 'Sahoo');
