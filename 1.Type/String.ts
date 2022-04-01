let StudentName: string = 'Debasish';
let StudentDept: string = 'CS';

//before ES6
let output1: string = StudentName + 'Study in the' + StudentDept + 'Dept';


//After ES6
let output2: string = `${StudentName} Study in the ${StudentDept} Dept`;

console.log(output1)
console.log(output2)