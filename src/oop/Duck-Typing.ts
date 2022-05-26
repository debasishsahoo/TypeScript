// According to TypeScript, Duck-Typing is a method/rule used to check the type compatibility for more complex variable types.

// TypeScript uses the duck-typing method to compare one object with other objects by checking that both objects have the same type matching names or not. It means we cannot change the signature of a variable. For example, if we assign an object that has two properties like name, address and next time we assign an object which contains more properties or fewer properties or both properties are not (name, address), then the TypeScript compiler will generate the compile-time error. The concept is known as Duck typing.
export {};
class Dog {
  sound = 'barking';
}
class Lion {
  sound = 'roaring';
}
class Goat {
  sound = 'bleat';
  swim() {
    console.log('Cannot Swim!');
  }
}
let lion: Lion = new Dog(); // substitutes
let dog: Dog = new Lion(); // substitutes
let lionTwo: Lion = new Goat();
let goat: Goat = new Lion(); // IDE & compiler error
console.log('Lion Sound: ' + lion.sound);
console.log('Dog sound: ' + dog.sound);
console.log('Lion sound: ' + lionTwo.sound);
