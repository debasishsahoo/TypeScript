"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(color) {
        this.Color = color;
    }
}
class Audi extends Car {
    constructor(color, price) {
        super(color);
        this.Price = price;
    }
    display() {
        console.log('Color:' + this.Color);
        console.log('Price:' + this.Price);
    }
}
let obj = new Audi('Black', 450000000);
obj.display();
