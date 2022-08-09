export {};

class Student {
  //Properties
  id: number;
  name: string;

  //Constructur
  constructor(ID: number, NAME: string) {
    this.id = ID;
    this.name = NAME;
  }

  //Methods
  GetName(): string {
    return `Name:${this.name}`;
  }
  GetDetails(): string {
    return `Id:${this.id} and Name:${this.name}`;
  }
}

// Object of Student Class
let Amit: Student = new Student(1, 'Amit');
let Suman: Student = new Student(2, 'Suman');
let Indronil: Student = new Student(3, 'Indronil');
let Rettiwk: Student = new Student(4, 'Rettiwk');
let Shaqlin: Student = new Student(5, 'Shaqlin');
let Rohit: Student = new Student(6, 'Rohit');
let Supriya: Student = new Student(7, 'Supriya');

class Human {
  //Properties or Varible
  hand: number;
  leg: number;
  eye: number;

  //Constructur
  constructor(HAND: number, LEG: number, EYE: number) {
    this.hand = HAND;
    this.leg = LEG;
    this.eye = EYE;
  }

  //Methods
  GetMovement(): string {
    return `Hand:${this.hand}`;
  }
  GetWaking(): string {
    return `Leg:${this.leg}`;
  }
  GetVisson(): string {
    return `Eye:${this.eye}`;
  }
}

// Object of Student Class
let Amit1: Human = new Human(2, 2, 4);
let Suman1: Human = new Human(2, 2, 2);
let Indronil1: Human = new Human(2, 2, 4);
let Rettiwk1: Human = new Human(2, 2, 2);
let Shaqlin1: Human = new Human(2, 2, 2);
let Rohit1: Human = new Human(2, 2, 2);
let Supriya1: Human = new Human(2, 2, 2);
