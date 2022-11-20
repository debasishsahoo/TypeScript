export { }
//!Single Inheretance 1:1
class Car {
    Color: string;
    constructor(c: string) {
        this.Color = c;
    }
}

class Audi extends Car {
    price: number;
    type: string;

    constructor(color: string, price: number, type: string) {
        super(color);
        this.price = price
        this.type = type
    }

    display(): void {
        console.log('Color of Audi car:' + this.Color)
        console.log('Price of Audi car:' + this.price)
        console.log('Type of Audi car:' + this.type)
    }
}

let A4: Car = new Audi('RED', 123456789, 'Sedan')




//CAR ==>AUDI  

