"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Static Property
class Circle {
    static CalculateArea(radius) {
        return this.pi * radius * radius;
    }
}
Circle.pi = 3.14;
console.log(Circle.pi);
console.log(Circle.CalculateArea(5));
//Static Member
class Circle1 {
    constructor() {
        this.pi = 3;
    }
}
Circle1.pi = 3.14;
console.log(Circle1.pi);
let CircleObj = new Circle1();
console.log(CircleObj.pi);
//
class Circle2 {
    static CalculateArea(radius) {
        return this.pi * radius * radius;
    }
    CalculateCircumference(radius) {
        return 2 * Circle2.pi * radius;
    }
}
Circle2.pi = 3.14;
console.log(Circle2.pi);
console.log(Circle2.CalculateArea(5));
console.log(Circle2.CalculateCircumference(5));
let c2 = new Circle2();
c2.CalculateCircumference(5);
c2.CalculateArea(5);
