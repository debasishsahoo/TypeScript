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
class BabyDog extends Dog {
  weep(): void {
    console.log('Weeping');
  }
}

let rio = new BabyDog();
rio.eat();
rio.bark();
rio.weep();

// BaseClass->ParentClass->ChildClass
