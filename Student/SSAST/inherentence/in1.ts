export {};
class Car {
  Color: string;
  constructor(color: string) {
    this.Color = color;
  }
}

class Audi extends Car {
  Price: number;
  constructor(color: string, price: number) {
    super(color);
    this.Price = price;
  }

  display(): void {
    console.log('Color:' + this.Color);
    console.log('Price:' + this.Price);
  }
}

let obj = new Audi('Black', 450000000);
obj.display();
