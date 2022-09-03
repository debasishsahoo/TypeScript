export {};

class Car {
  //properties
  Color: string;
  whell: number;
  break: boolean;
  gear: number;
  //to Init the Properties
  constructor(c: string, w: number, b: boolean, g: number) {
    this.Color = c;
    this.whell = w;
    this.break = b;
    this.gear = g;
  }
}

class Audi extends Car {
  Price: number;
  SaftyBaloon: boolean;
  constructor(
    c: string,
    w: number,
    b: boolean,
    g: number,
    p: number,
    s: boolean
  ) {
    super(c, w, b, g);
    this.Price = p;
    this.SaftyBaloon = s;
  }
}

let DebasishCar: Audi = new Audi('White', 4, true, 5, 10000000000000, true);

let SumanCar: Audi = new Audi('Black', 4, true, 5, 10000000000000, true);





//car->audi

