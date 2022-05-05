class Animal {
  eat(): void {
    console.log('Eating');
  }
}
class Dog extends Animal {
  bark(): void {
    console.log('Barking');
  }
}
class BabyDog extends Dog {
  weep(): void {
    console.log('Weeping');
  }
}
let obj1 = new BabyDog();
obj1.eat();
obj1.bark();
obj1.weep();
