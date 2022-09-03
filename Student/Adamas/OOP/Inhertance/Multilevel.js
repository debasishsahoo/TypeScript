"use strict";
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
class BabyDog extends Dog {
    weep() {
        console.log('Weeping');
    }
}
let rio = new BabyDog();
rio.eat();
rio.bark();
rio.weep();
// BaseClass->ParentClass->ChildClass
