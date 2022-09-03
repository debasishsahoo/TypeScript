export {};

interface IString {
  [index: number]: string;
}

interface INumber {
  [index: number]: number;
}

interface IMIX {
  [index: string]: number;
}

let name: IString = ['Ravi', 'Srbon', 'Bar'];
let age: INumber = [1, 2, 3];
