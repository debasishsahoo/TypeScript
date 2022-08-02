export {};

//Static Property
class Circle {
  static pi: number = 3.14;

  static CalculateArea(radius: number) {
    return this.pi * radius * radius;
  }
}

console.log(Circle.pi);
console.log(Circle.CalculateArea(5));

//Static Member
class Circle1 {
  static pi = 3.14;
  pi = 3;
}

console.log(Circle1.pi);

let CircleObj = new Circle1();
console.log(CircleObj.pi);

//
class Circle2 {
  static pi: number = 3.14;

  static CalculateArea(radius: number) {
    return this.pi * radius * radius;
  }

  CalculateCircumference(radius: number) {
    return 2 * Circle2.pi * radius;
  }
}

console.log(Circle2.pi);
console.log(Circle2.CalculateArea(5));
console.log(Circle2.CalculateCircumference(5));

let c2 = new Circle2();
c2.CalculateCircumference(5);
c2.CalculateArea(5);
