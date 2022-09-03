"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pet {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Pet {
    display() {
        console.log(`name of my dog is ${this.name}`);
    }
}
class Fish extends Pet {
    display() {
        console.log(`name of my fish is ${this.name}`);
    }
}
let DogObj = new Dog(`Caspar`);
DogObj.display();
let FishObj = new Fish(`Goldie`);
FishObj.display();
///                        pet
///                        /\
///                     Dog Fish
