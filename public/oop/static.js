"use strict";
//Static Property
class Circle {
    static calculateArea(radius) {
        return this.pi * radius * radius;
    }
}
Circle.pi = 3.14;
Circle.pi;
Circle.calculateArea(5);
//Static Members
class Circle1 {
    constructor() {
        this.pi = 3;
    }
}
Circle1.pi = 3.14;
Circle1.pi;
let circleObj = new Circle1();
circleObj.pi;
//Static and Non-static Members
class Circle2 {
    static calculateArea(radius) {
        return this.pi * radius * radius;
    }
    calculateCircumference(radius) {
        return 2 * Circle.pi * radius;
    }
}
Circle2.pi = 3.14;
Circle2.calculateArea(5); // returns 78.5
let circleObj1 = new Circle2();
circleObj1.calculateCircumference(5); // returns 31.4000000
circleObj1.calculateArea(); // <-- cannot call this
