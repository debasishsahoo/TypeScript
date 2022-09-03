export {};

class Pet {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Pet {
  display(): void {
    console.log(`name of my dog is ${this.name}`);
  }
}

class Fish extends Pet {
  display(): void {
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
