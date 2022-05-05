"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TypeScript Generics
function identity(arg) {
    return arg;
}
let output1 = identity('myString');
let output2 = identity(100);
console.log(output1);
console.log(output2);
function getItems(items) {
    return new Array().concat(items);
}
let arrNumber = getItems([10, 20, 30]);
let arrString = getItems(['Hello', 'JavaTpoint']);
arrNumber.push(40); // Correct
arrNumber.push('Hi! Javatpoint'); // Compilation Error
arrString.push('Hello TypeScript'); // Correct
arrString.push(50); // Compilation Error
console.log(arrNumber);
console.log(arrString);
//Multi-type variables
function displayDataType1(id, name) {
    console.log('DataType of Id: ' + typeof id + '\nDataType of Name: ' + typeof name);
}
displayDataType1(101, 'Abhishek');
//Generic with non-generic Type
function displayDataType2(id, name) {
    console.log('DataType of Id: ' + typeof id + '\nDataType of Name: ' + typeof name);
}
displayDataType2(1, 'Abhishek');
//Generics Classes
class StudentInfo {
    setValue(id, name) {
        this.Id = id;
        this.Name = name;
    }
    display() {
        console.log(`Id = ${this.Id}, Name = ${this.Name}`);
    }
}
let st = new StudentInfo();
st.setValue(101, 'Virat');
st.display();
let std = new StudentInfo();
std.setValue('201', 'Rohit');
std.display();
function printName(theInput) {
    console.log(`Name: ${theInput.name} \nAge: ${theInput.age} \nProfession: ${theInput.profession}`);
}
let player = {
    name: 'Rohit Sharma',
    age: 30,
    profession: 'Cricket Player',
};
printName(player);
function studentData(id, value) {
    console.log('Id = ' + id + ', \nName = ' + value);
}
let studentInfo = studentData;
studentInfo(11, 'Rohit Sharma');
function loggingIdentity(arg) {
    console.log('Length: ' + arg.length); // It has a .length property, so no more error found
    return arg;
}
loggingIdentity({ length: 10, value: 9 });
loggingIdentity(3); // Compilation Error, number doesn't have a .length property
//Generic Constraints with class
class Student {
    constructor(id, name) {
        this.Id = id;
        this.Name = name;
    }
}
function display(per) {
    console.log(`${st.Id} ${st.Name}`);
}
let st = new Student(101, '\nVirat Kohli');
display(st);
