"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//let email:string;
var email = 'mail@example.com';
//let email = '';
//let email = '0';
var selecteditem = email !== null && email !== void 0 ? email : 'No Email Selected';
console.log(selecteditem);
//Difference with ||
var email1;
var selecteditem1 = email1 || 'No Email Selected';
console.log(selecteditem1);
email = 'mail@example.com';
selecteditem = email || 'No Email Selected';
console.log(selecteditem);
email = '';
selecteditem = email || 'No Email Selected';
console.log(selecteditem); //No Email Selected
selecteditem = email !== null && email !== void 0 ? email : 'No Email Selected';
console.log(selecteditem); //""
//Difference with Conditional Operator
var email2;
selecteditem =
    email2 != undefined || email2 != null ? email2 : 'No Email Selected';
console.log(selecteditem); //No Email Selected
//Assiging Default Values
var score;
console.log(score || 'Please enter your score');
//Please enter your score
console.log(score !== null && score !== void 0 ? score : 'Please enter your score');
//Please enter your score
score = 0;
console.log(score || 'Please enter your score');
//Please enter your score
console.log(score !== null && score !== void 0 ? score : 'Please enter your score');
//0
//Short-circuiting
//?? like || & && operators, stops evaluating if the left-hand operand is not null/undefined. Hence the right-hand expression is not evaluated.
var a = 10;
function getNumber() {
    a = a + 1;
    return a;
}
var b = null !== null && null !== void 0 ? null : getNumber();
getNumber(); //not invoked
console.log(a); //11
b = 'Hello' !== null && 'Hello' !== void 0 ? 'Hello' : getNumber();
//getNumber() is not invoked
console.log(a); //10
