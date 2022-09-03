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
class BMW extends Car {
    constructor(c, p) {
        super(c);
        this.Price = p;
    }
    display() {
        console.log(`Color of BMW Car is ${this.color}`);
        console.log(`Price of BMW Car is ${this.Price}`);
        return `${this.color} and ${this.Price}`;
    }
}
class Mercedes extends Car {
    constructor(c, p) {
        super(c);
        this.Price = p;
    }
    display() {
        console.log(`Color of BMW Car is ${this.color}`);
        console.log(`Price of BMW Car is ${this.Price}`);
        return `${this.color} and ${this.Price}`;
    }
}
