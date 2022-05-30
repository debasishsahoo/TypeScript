"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abc = void 0;
class abc {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(a) {
        return new abc(this.x + a.x + this.y + a.y);
    }
}
exports.abc = abc;
