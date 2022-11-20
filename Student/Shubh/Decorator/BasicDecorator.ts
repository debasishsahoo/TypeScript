export { }
//Class Decorator
function classDecorator<T extends { new(...arg: any[]): {} }>(constructor: T) {
    return class extends constructor {
        origin1: string = 'Coming from Decorator';
        x: string = "I am OVERIDE the Class Value"
    };
}


@classDecorator
class Geeter {
    origin2 = "Comming form Class";
    x: string;
    constructor(m: string) {
        this.x = m;
    }
}

console.log(new Geeter("Hello Shubh"))










function classDecorator1<T extends { new(...arg: any[]): {} }>(constructor: T) {

    console.log("Greeter1 class declard at:", new Date())
    return constructor;
}

@classDecorator1
class Geeter1 {
    origin2 = "Comming form Class";
    x: string;
    constructor(m: string) {
        this.x = m;
    }
}