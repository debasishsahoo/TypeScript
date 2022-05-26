"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pet {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Pet {
    display() {
        console.log('name of my dog is : ' + this.name);
    }
}
class Fish extends Pet {
    display() {
        console.log('name of my fish is : ' + this.name);
    }
}
let Dogobj = new Dog('Casper');
Dogobj.display();
let Fishobj = new Fish('Goldie');
Fishobj.display();
