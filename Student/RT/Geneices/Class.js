"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KeyValuePair {
    constructor(k, v) {
        this.key = k;
        this.Val = v;
    }
    display() {
        console.log(`Key=${this.key},Val=${this.Val}`);
    }
}
let kvp1 = new KeyValuePair(1, 'R');
kvp1.display();
let kvp2 = new KeyValuePair(1, 2);
kvp2.display();
class KVP1 {
    process(key, val) {
        console.log(`Key=${key},val=${val}`);
    }
}
let proc1 = new KVP1();
proc1.process(1, 'tanu');
