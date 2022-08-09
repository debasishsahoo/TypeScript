"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    //Constructur
    constructor(ID, NAME) {
        this.id = ID;
        this.name = NAME;
    }
    //Methods
    GetName() {
        return `Name:${this.name}`;
    }
    GetDetails() {
        return `Id:${this.id} and Name:${this.name}`;
    }
}
// Object of Student Class
let Amit = new Student(1, 'Amit');
let Suman = new Student(2, 'Suman');
let Indronil = new Student(3, 'Indronil');
let Rettiwk = new Student(4, 'Rettiwk');
let Shaqlin = new Student(5, 'Shaqlin');
let Rohit = new Student(6, 'Rohit');
let Supriya = new Student(7, 'Supriya');
class Human {
    //Constructur
    constructor(HAND, LEG, EYE) {
        this.hand = HAND;
        this.leg = LEG;
        this.eye = EYE;
    }
    //Methods
    GetMovement() {
        return `Hand:${this.hand}`;
    }
    GetWaking() {
        return `Leg:${this.leg}`;
    }
    GetVisson() {
        return `Eye:${this.eye}`;
    }
}
// Object of Student Class
let Amit1 = new Human(2, 2, 4);
let Suman1 = new Human(2, 2, 2);
let Indronil1 = new Human(2, 2, 4);
let Rettiwk1 = new Human(2, 2, 2);
let Shaqlin1 = new Human(2, 2, 2);
let Rohit1 = new Human(2, 2, 2);
let Supriya1 = new Human(2, 2, 2);
