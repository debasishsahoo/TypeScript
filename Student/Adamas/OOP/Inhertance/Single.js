"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    constructor(area) {
        this.area = area;
    }
}
class Circle extends Shape {
    display() {
        console.log(`Area of the Circle ${this.area}`);
    }
}
let obj = new Circle(120);
obj.display();
//Base Clas -> Child Class
