export {};
//TypeScript Generics
function identity<T>(arg: T): T {
  return arg;
}
let output1 = identity<string>('myString');
let output2 = identity<number>(100);
console.log(output1);
console.log(output2);

function getItems<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
let arrNumber = getItems<number>([10, 20, 30]);
let arrString = getItems<string>(['Hello', 'google']);
arrNumber.push(40); // Correct
arrNumber.push('Hi! google'); // Compilation Error
arrString.push('Hello TypeScript'); // Correct
arrString.push(50); // Compilation Error
console.log(arrNumber);
console.log(arrString);

//Multi-type variables
function displayDataType1<T, U>(id: T, name: U): void {
  console.log(
    'DataType of Id: ' + typeof id + '\nDataType of Name: ' + typeof name
  );
}
displayDataType1<number, string>(101, 'Abhishek');

//Generic with non-generic Type
function displayDataType2<T>(id: T, name: string): void {
  console.log(
    'DataType of Id: ' + typeof id + '\nDataType of Name: ' + typeof name
  );
}
displayDataType2<number>(1, 'Abhishek');

//Generics Classes
class StudentInfo<T, U> {
  private Id: T;
  private Name: U;
  setValue(id: T, name: U): void {
    this.Id = id;
    this.Name = name;
  }
  display(): void {
    console.log(`Id = ${this.Id}, Name = ${this.Name}`);
  }
}
let st = new StudentInfo<number, string>();
st.setValue(101, 'Virat');
st.display();
let std = new StudentInfo<string, string>();
std.setValue('201', 'Rohit');
std.display();

//Generics Interface
interface People {
  name: string;
  age: number;
}
interface Celebrity extends People {
  profession: string;
}
function printName<T extends Celebrity>(theInput: T): void {
  console.log(
    `Name: ${theInput.name} \nAge: ${theInput.age} \nProfession: ${theInput.profession}`
  );
}
let player: Celebrity = {
  name: 'Rohit Sharma',
  age: 30,
  profession: 'Cricket Player',
};
printName(player);

//Generics Interface as Function Type
interface StudentInfo<T, U> {
  (id: T, value: U): void;
}
function studentData(id: number, value: string): void {
  console.log('Id = ' + id + ', \nName = ' + value);
}
let studentInfo: StudentInfo<number, string> = studentData;
studentInfo(11, 'Rohit Sharma');

//Generic Constraints
interface Lengthwise {
  length: number;
}
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log('Length: ' + arg.length); // It has a .length property, so no more error found
  return arg;
}
loggingIdentity({ length: 10, value: 9 });
loggingIdentity(3); // Compilation Error, number doesn't have a .length property

//Generic Constraints with class
class Student {
  Id: number;
  Name: string;

  constructor(id: number, name: string) {
    this.Id = id;
    this.Name = name;
  }
}
function display<T extends Student>(per: T): void {
  console.log(`${st.Id} ${st.Name}`);
}
let st = new Student(101, '\nVirat Kohli');
display(st);
