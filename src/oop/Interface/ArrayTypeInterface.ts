// Array which return string
interface nameArray {
  [index: number]: string;
}
// use of the interface
let myNames: nameArray;
myNames = ['Virat', 'Rohit', 'Sachin'];

// Array which return number
interface ageArray {
  [index: number]: number;
}
var myAges: ageArray;
myAges = [10, 18, 25];
console.log('My age is: ' + myAges[1]);
