"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abc2 = void 0;
class abc2 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add(a) {
        return new abc2(this.x + a.x + this.y + a.y, this.z + a.z);
    }
}
exports.abc2 = abc2;
