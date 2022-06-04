export {};

interface IPerson {
  fn: string;
  ln: string;
  age: number;
  sayHi: () => string;
}

let customer: IPerson = {
  fn: 'rup',
  ln: 'das',
  age: 20,
  sayHi: () => {
    return 'Hi';
  },
};
let student: IPerson = {
  fn: 'arnab',
  ln: 'ghosh',
  age: 23,
};
let Teacher: IPerson = {
  fn: 'sourav',
  ln: 'kundu',
  age: 22,
};
