"use strict";
//    baseclass
//       /\
// Child1 child2
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    eat() {
        console.log('Eating');
    }
}
exports.Animal = Animal;
class Dog extends Animal {
    bark() {
        console.log('Barking');
    }
}
class BabyDog extends Animal {
    weep() {
        console.log('Weeping');
    }
}
let rio = new BabyDog();
rio.eat();
rio.weep();
let shimba = new Dog();
shimba.eat();
shimba.bark();
