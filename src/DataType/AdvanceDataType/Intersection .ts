export {};
//Intersection types allow us to combine two or more types into one. The resulting type will have all the properties of all the types. This allows us to get a Single type from existing types that has all the properties of both the types
//Using intersection types
interface Person {
  name: string;
  age: number;
}
interface Student {
  studentCode: string;
  division: string;
}

let student1: Student & Person = {
  studentCode: '1',
  division: '10',
  name: 'Rahul',
  age: 20,
};

let student2: Student & Person = {
  studentCode: '1',
  division: '10',
  age: 20,
};

//Type '{ studentCode: string; division: string; age: number; }' is not assignable to type 'Student & Person'.
// Property 'name' is missing in type '{ studentCode: string; division: string; age: number; }' but required in type 'Person'.

//Common Primitive Property
interface Person {
  name: string;
  age: number;
}

interface Student {
  studentCode: string;
  division: string;
  age: number;
}

let student3: Student & Person = {
  studentCode: '1',
  division: '10',
  name: 'rahul',
  age: 20,
};
let student4: Student & Person = {
  studentCode: '1',
  division: '10',
  name: 'rahul',
  age: 20, //ERROR
};

//Error
//Type 'number' is not assignable to type 'never'.(2322)
//input.ts(9, 5): The expected type comes from property 'age' which is declared here on type 'Student & Person'

//Common Non-Primitive Property

interface Homeaddress {
  Home1: string;
  Home2: string;
}

interface Officeaddress {
  Office1: string;
  Office2: string;
}

interface Person {
  name: string;
  age: number;
  address: Homeaddress;
}

interface Student {
  studentCode: string;
  division: string;
  age: number;
  address: Officeaddress;
}

let student5: Student & Person = {
  studentCode: '1',
  division: '10',
  name: 'rahul',
  age: 20,
  address: {
    //Intersection of Homeaddress & Officeaddress
    Home1: '',
    Home2: '',
    Office1: '',
    Office2: '',
  },
};
