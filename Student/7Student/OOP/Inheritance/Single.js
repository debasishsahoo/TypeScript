"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    //to Init the Properties
    constructor(c, w, b, g) {
        this.Color = c;
        this.whell = w;
        this.break = b;
        this.gear = g;
    }
}
class Audi extends Car {
    constructor(c, w, b, g, p, s) {
        super(c, w, b, g);
        this.Price = p;
        this.SaftyBaloon = s;
    }
}
let DebasishCar = new Audi('White', 4, true, 5, 10000000000000, true);
let SumanCar = new Audi('Black', 4, true, 5, 10000000000000, true);
//car->audi
