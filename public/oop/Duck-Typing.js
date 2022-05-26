"use strict";
// According to TypeScript, Duck-Typing is a method/rule used to check the type compatibility for more complex variable types.
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    constructor() {
        this.sound = 'barking';
    }
}
class Lion {
    constructor() {
        this.sound = 'roaring';
    }
}
class Goat {
    constructor() {
        this.sound = 'bleat';
    }
    swim() {
        console.log('Cannot Swim!');
    }
}
let lion = new Dog(); // substitutes
let dog = new Lion(); // substitutes
let lionTwo = new Goat();
let goat = new Lion(); // IDE & compiler error
console.log('Lion Sound: ' + lion.sound);
console.log('Dog sound: ' + dog.sound);
console.log('Lion sound: ' + lionTwo.sound);
