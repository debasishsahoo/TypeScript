"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KeyValuePair {
    constructor(k, v) {
        this.Key = k;
        this.Val = v;
    }
    display() {
        console.log(`Key=${this.Key},val=${this.Val}`);
    }
}
let kv1 = new KeyValuePair(1, 'Debasish');
let kv2 = new KeyValuePair(1, 23);
