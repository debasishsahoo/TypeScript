export {};

interface IPerson {
  fn: string;
  ln: string;
  age: number;
  GetDetails: () => string;
}

let Person: IPerson = {
  fn: 'Amit',
  ln: 'Sarkar',
  age: 21,
  GetDetails: (): string => {
    return `Hi`;
  },
};
