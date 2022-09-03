export {};
class Shape {
  constructor(protected area: number) {}
}

class Circle extends Shape {
  display(): void {
    console.log(`Area of the Circle ${this.area}`);
  }
}

let obj = new Circle(120);
obj.display();

//Base Clas -> Child Class
