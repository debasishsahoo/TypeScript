export {};
interface Person {
  name: string;
  age: number;
}

interface Student {
  studentCode: string;
  division: string;
}

let student: Student & Person = {
  studentCode: '1',
  division: '10',
  name: 'Rahul',
  age: 20,
};
