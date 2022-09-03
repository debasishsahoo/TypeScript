export {};

interface IPerson {
  fn: string;
  ln: string;
}

interface Employee extends IPerson {
  gerger: string;
  id: string;
}

//Blank object {}
// Creating a Blank Obj with the type of Employee
//let emp = <Employee>{};

//let emp = new Employee();

//Generics type <>
let emp = <Employee>{};
emp.fn = 'Debasish';
