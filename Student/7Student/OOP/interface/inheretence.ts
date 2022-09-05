export {};

//Single Inherentence
interface IPerson {
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
}
interface IEmployee extends IPerson {
  id: number;
  DOJ: string;
}
//Create Blank Object with the type of Employee
let EmpObj = <IEmployee>{};
EmpObj.firstname = 'Suman';

//--------------------------------------------------------------------------------
//Multiple Inherentence
interface Student {
  name: string;
  streem: string;
}
interface Employee {
  id: number;
  salary: number;
}

interface Engg extends Student, Employee {}

let EnggObj = <Engg>{};
EnggObj.name = 'Amit';
EnggObj.salary = 60000000000;

//-----------------------------------------------------------------------------
interface nameA {
  [index: number]: string;
}

let mynames: nameA;
mynames = ['amit', 'rohit', 'suman', 'saq', 'supriya'];

interface nameB {
  [index: number]: number;
}

let mynum: nameB;
mynum = [10, 23, 34];
