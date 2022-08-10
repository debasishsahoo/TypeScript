"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    constructor() {
        this.sound = 'Barking';
    }
}
class Lion {
    constructor() {
        this.sound = 'Roaring';
    }
}
class Goat {
    constructor() {
        this.sound = 'Bleat';
    }
    swim() {
        console.log('Cannot Swim');
    }
}
let lion = new Dog();
let dog = new Lion();
let lion2 = new Goat();
let goat = new Lion();
console.log('Lion Sound:' + lion.sound);
