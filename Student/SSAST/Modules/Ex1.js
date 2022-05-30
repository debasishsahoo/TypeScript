"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abc1 = void 0;
class abc1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(a) {
        return new abc1(this.x + a.x + this.y + a.y);
    }
}
exports.abc1 = abc1;
