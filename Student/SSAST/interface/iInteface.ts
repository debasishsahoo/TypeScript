export {};
interface Iperson {
  name: string;
  age: number;
}
interface Employee extends Iperson {
  gender: string;
  id: number;
}
interface MAllowence {
  bounas: number;
}

let empObj = <Employee>{};

empObj.name = 'deb';
empObj.age = 33;
empObj.gender = 'M';
empObj.id = 123;

interface Manager extends Employee, MAllowence {}
