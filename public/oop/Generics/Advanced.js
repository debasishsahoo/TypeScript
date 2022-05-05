"use strict";
function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(['Hello', 'World']);
myNumArr.push(400);
myStrArr.push('Hello TypeScript');
myNumArr.push('Hi');
myStrArr.push(500);
console.log(myNumArr);
console.log(myStrArr);
function getArray1(items) {
    return new Array().concat(items);
}
var myNumArr1 = getArray1([100, 200, 300]);
var myStrArr1 = getArray1(['Hello', 'World']);
myNumArr1.push(400); // OK
myStrArr1.push('Hello TypeScript'); // OK
myNumArr1.push('Hi'); // Compiler Error
myStrArr1.push(500); // Compiler Error
//Multiple Type Variables
function displayType(id, name) {
    console.log(typeof id + ', ' + typeof name);
}
displayType(1, 'Steve'); // number, string
//Generic with Non-generic Type
function DisplayType(id, name) {
    console.log(typeof id + ', ' + typeof name);
}
//Methods and Properties of Generic Type
DisplayType(1, 'Steve'); // number, string
function displayType1(id, name) {
    id.toString(); // OK
    name.toString(); // OK
    id.toFixed(); // Compiler Error: 'toFixed' does not exists on type 'T'
    name.toUpperCase(); // Compiler Error: 'toUpperCase' does not exists on type 'U'
    console.log(typeof id + ', ' + typeof name);
}
//Generic Array Methods
function displayNames(names) {
    console.log(names.join(', '));
}
displayNames(['Steve', 'Bill']); // Steve, Bill
//Constraints
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    return Person;
}());
function display(per) {
    console.log("".concat(per.firstName, " ").concat(per.lastName));
}
var per = new Person('Bill', 'Gates');
display(per); //Output: Bill Gates
display('Bill Gates'); //Compiler Error
