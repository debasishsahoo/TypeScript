var StudentName = 'Debasish';
var StudentDept = 'CS';
//before ES6
var output1 = StudentName + 'Study in the' + StudentDept + 'Dept';

//After ES6
var output2 = "".concat(StudentName, " Study in the ").concat(StudentDept, " Dept");

console.log(output1);
console.log(output2);
