"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(c) {
        this.color = c;
    }
}
class Audi extends Car {
    constructor(c, p) {
        super(c);
        this.Price = p;
    }
    display() {
        console.log(`Color of Audi Car is ${this.color}`);
        console.log(`Price of Audi Car is ${this.Price}`);
        return `${this.color} and ${this.Price}`;
    }
}
let obj = new Audi('Black', 850000000);
obj.display();
class A2 extends Audi {
    constructor(c, p, e, s) {
        super(c, p);
        this.Engine = e;
        this.Safty = s;
    }
    display() {
        console.log(`Engin of Audi Car is ${this.Engine}`);
        console.log(`Safty of Audi Car is ${this.Safty}`);
        return `${this.Engine} and ${this.Safty}`;
    }
}
let a2 = new A2('Black', 900000000, 'V12', true);
console.log(a2.display());
