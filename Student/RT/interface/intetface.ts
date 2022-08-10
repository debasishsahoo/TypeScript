export {};

interface Iperson {
  fn: string;
  ln: string;
  age: number;
  SayHi: () => string;
}

let Student1: Iperson = {
  fn: 'Tanusree',
  ln: 'Maji',
  age: 21,
  SayHi: (): string => {
    return 'Hello';
  },
};

let Student2: Iperson = {
  fn: 'Rumana',
  ln: 'Sultana',
  age: 21,
  SayHi: (): string => {
    return 'Hi';
  },
};



interface nameArray {
  [index: number]: string;
}
let myName: nameArray;
myName = ['Virat', 'Rohit', 'Sachin'];

interface ageArray {
  [index: number]: number;
}
let myAge: ageArray;
myAge = [10, 18, 25];

