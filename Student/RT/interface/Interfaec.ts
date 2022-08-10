export {};

interface Person {
  name: string;
}
interface PersonDetails {
  age: number;
  gender: string;
}

interface Emplopee extends Person , PersonDetails{
  empcode: number;
}

let empObject: Emplopee = <Emplopee>{};
empObject.name = 'Debasish Sahoo';
empObject.age = 34;
empObject.gender = 'Male';
empObject.empcode = 1;
