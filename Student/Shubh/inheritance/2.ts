export { }
//!Hierarchical Inheretance    parent
//!                            /  |  \
//!                          c1   c2  c3
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


class Mercedes extends Car {
    price: number;
    type: string;

    constructor(color: string, price: number, type: string) {
        super(color);
        this.price = price
        this.type = type
    }

    display(): void {
        console.log('Color of Mercedes car:' + this.Color)
        console.log('Price of Mercedes car:' + this.price)
        console.log('Type of Mercedes car:' + this.type)
    }
}

class Hammer extends Car {
    price: number;
    type: string;

    constructor(color: string, price: number, type: string) {
        super(color);
        this.price = price
        this.type = type
    }

    display(): void {
        console.log('Color of Mercedes car:' + this.Color)
        console.log('Price of Mercedes car:' + this.price)
        console.log('Type of Mercedes car:' + this.type)
    }
}



let A4: Car = new Audi('RED', 123456789, 'Sedan')
let C200: Car = new Mercedes('White', 12324555, 'Hatchbag')



//         Mercedes <== CAR ==>AUDI  

