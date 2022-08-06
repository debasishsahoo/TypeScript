export {};
let Student: {
  name: string;
  age: number;
  dob: Date;
  job: string;
};

Student = {
  name: 'Ritesh',
  age: 18,
  dob: new Date('23/08/01'),
  job: 'Devloper',
};

console.log('Student:', Student.name);

let Emp: {
  name: string;
  age: number;
  dob: Date;
  job: string;
} = {
  name: 'Ani',
  age: 18,
  dob: new Date('23/08/01'),
  job: 'Devloper',
};

console.log('Emp:', Emp.name);
