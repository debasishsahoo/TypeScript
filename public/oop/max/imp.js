"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Moulder {
    constructor() {
        this.moulding = true;
        this.done = false;
    }
    mould() {
        this.moulding = false;
        this.done = true;
    }
}
class Stacker {
    constructor() {
        this.stacking = true;
        this.done = false;
    }
    stack() {
        this.stacking = false;
        this.done = true;
    }
}
class Block {
    constructor(name, length, breadth, height) {
        this.name = '';
        this.length = 0;
        this.breadth = 0;
        this.height = 0;
        this.name = name;
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }
}
