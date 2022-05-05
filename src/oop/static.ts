//Static Property
class Circle {
  static pi: number = 3.14;

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }
}
Circle.pi;
Circle.calculateArea(5);

//Static Members
class Circle1 {
  static pi = 3.14;
  pi = 3;
}

Circle1.pi;

let circleObj = new Circle1();
circleObj.pi;

//Static and Non-static Members
class Circle2 {
  static pi = 3.14;

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }

  calculateCircumference(radius: number): number {
    return 2 * Circle.pi * radius;
  }
}

Circle2.calculateArea(5); // returns 78.5

let circleObj1 = new Circle2();
circleObj1.calculateCircumference(5); // returns 31.4000000
circleObj1.calculateArea(); // <-- cannot call this
