export { }
//!Multi Level 
class Animal {
    eat(): void {
        console.log('Eating')
    }
}
class Dog extends Animal {
    bark(): void {
        console.log('Brking')
    }
}
class BadyDog extends Dog {
    weep(): void {
        console.log('Weeping')
    }
}

let BG: BadyDog = new BadyDog()

BG.eat();
BG.bark();

