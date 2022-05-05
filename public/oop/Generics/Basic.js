"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TypeScript Generics
function identity(arg) {
    return arg;
}
var output1 = identity('myString');
var output2 = identity(100);
console.log(output1);
console.log(output2);
function getItems(items) {
    return new Array().concat(items);
}
var arrNumber = getItems([10, 20, 30]);
var arrString = getItems(['Hello', 'google']);
arrNumber.push(40); // Correct
arrNumber.push('Hi! google'); // Compilation Error
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
var StudentInfo = /** @class */ (function () {
    function StudentInfo() {
    }
    StudentInfo.prototype.setValue = function (id, name) {
        this.Id = id;
        this.Name = name;
    };
    StudentInfo.prototype.display = function () {
        console.log("Id = ".concat(this.Id, ", Name = ").concat(this.Name));
    };
    return StudentInfo;
}());
var st = new StudentInfo();
st.setValue(101, 'Virat');
st.display();
var std = new StudentInfo();
std.setValue('201', 'Rohit');
std.display();
function printName(theInput) {
    console.log("Name: ".concat(theInput.name, " \nAge: ").concat(theInput.age, " \nProfession: ").concat(theInput.profession));
}
var player = {
    name: 'Rohit Sharma',
    age: 30,
    profession: 'Cricket Player',
};
printName(player);
function studentData(id, value) {
    console.log('Id = ' + id + ', \nName = ' + value);
}
var studentInfo = studentData;
studentInfo(11, 'Rohit Sharma');
function loggingIdentity(arg) {
    console.log('Length: ' + arg.length); // It has a .length property, so no more error found
    return arg;
}
loggingIdentity({ length: 10, value: 9 });
loggingIdentity(3); // Compilation Error, number doesn't have a .length property
//Generic Constraints with class
var Student = /** @class */ (function () {
    function Student(id, name) {
        this.Id = id;
        this.Name = name;
    }
    return Student;
}());
function display(per) {
    console.log("".concat(st.Id, " ").concat(st.Name));
}
var st = new Student(101, '\nVirat Kohli');
display(st);
