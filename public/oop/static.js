"use strict";
//Static Property
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.calculateArea = function (radius) {
        return this.pi * radius * radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
Circle.pi;
Circle.calculateArea(5);
//Static Members
var Circle1 = /** @class */ (function () {
    function Circle1() {
        this.pi = 3;
    }
    Circle1.pi = 3.14;
    return Circle1;
}());
Circle1.pi;
var circleObj = new Circle1();
circleObj.pi;
//Static and Non-static Members
var Circle2 = /** @class */ (function () {
    function Circle2() {
    }
    Circle2.calculateArea = function (radius) {
        return this.pi * radius * radius;
    };
    Circle2.prototype.calculateCircumference = function (radius) {
        return 2 * Circle.pi * radius;
    };
    Circle2.pi = 3.14;
    return Circle2;
}());
Circle2.calculateArea(5); // returns 78.5
var circleObj1 = new Circle2();
circleObj1.calculateCircumference(5); // returns 31.4000000
circleObj1.calculateArea(); // <-- cannot call this
