export {};
class Dog {
  sound = 'Barking';
}
class Lion {
  sound = 'Roaring';
}
class Goat {
  sound = 'Bleat';
  swim() {
    console.log('Cannot Swim');
  }
}

let lion: Lion = new Dog();

let dog: Dog = new Lion();

let lion2: Lion = new Goat();

let goat: Goat = new Lion();

console.log('Lion Sound:' + lion.sound);
