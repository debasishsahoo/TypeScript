"use strict";
class KeyValuePair {
    setKeyValue(key, val) {
        this.key = key;
        this.val = val;
    }
    display() {
        console.log(`Key = ${this.key}, val = ${this.val}`);
    }
}
let kvp1 = new KeyValuePair();
kvp1.setKeyValue(1, 'Steve');
kvp1.display(); //Output: Key = 1, Val = Steve
let kvp2 = new KeyValuePair();
kvp2.setKeyValue('CEO', 'Bill');
kvp2.display(); //Output: Key = CEO, Val = Bill
class kvProcessor1 {
    process(key, val) {
        console.log(`Key = ${key}, val = ${val}`);
    }
}
let proc1 = new kvProcessor1();
proc1.process(1, 'Bill'); //Output: key = 1, value = Bill
