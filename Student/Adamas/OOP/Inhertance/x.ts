//    baseclass
//       /\
// Child1 child2

export class Animal {
  eat(): void {
    console.log('Eating');
  }
}
class Dog extends Animal {
  bark(): void {
    console.log('Barking');
  }
}
class BabyDog extends Animal {
  weep(): void {
    console.log('Weeping');
  }
}

let rio = new BabyDog();
rio.eat();
rio.weep();

let shimba = new Dog();
shimba.eat();
shimba.bark();
