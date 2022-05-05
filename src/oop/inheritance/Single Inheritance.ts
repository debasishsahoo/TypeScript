class Shape {
  Area: number;
  constructor(area: number) {
    this.Area = area;
  }
}
class Circle extends Shape {
  display(): void {
    console.log('Area of the circle: ' + this.Area);
  }
}
var obj = new Circle(320);
obj.display();
