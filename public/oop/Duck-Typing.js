"use strict";
// According to TypeScript, Duck-Typing is a method/rule used to check the type compatibility for more complex variable types.
Object.defineProperty(exports, "__esModule", { value: true });
var Dog = /** @class */ (function () {
    function Dog() {
        this.sound = 'barking';
    }
    return Dog;
}());
var Lion = /** @class */ (function () {
    function Lion() {
        this.sound = 'roaring';
    }
    return Lion;
}());
var Goat = /** @class */ (function () {
    function Goat() {
        this.sound = 'bleat';
    }
    Goat.prototype.swim = function () {
        console.log('Cannot Swim!');
    };
    return Goat;
}());
var lion = new Dog(); // substitutes
var dog = new Lion(); // substitutes
var lionTwo = new Goat();
//let goat: Goat = new Lion(); // IDE & compiler error
console.log('Lion Sound: ' + lion.sound);
console.log('Dog sound: ' + dog.sound);
console.log('Lion sound: ' + lionTwo.sound);
