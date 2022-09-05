export {};
interface Person {
  name: string;
  age: number;
  gender: string;
}

interface Employee {
  streem: string;
  id: number;
}

interface Engineer extends Person, Employee {}

class engg implements Engineer {}
