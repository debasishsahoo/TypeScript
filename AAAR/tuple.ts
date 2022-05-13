export {};
let epmId: number = 1;
let empname: string = 'DINDA';

let emp: [number, string] = [epmId, empname];

let BGC, HC: [number, number, number, number?];

BGC = [0, 255, 255, 0.5];
HC = [0, 255, 255];

let emp1: [number, string][];
emp1 = [
  [1, 'Anjani'],
  [2, 'Sahu Da'],
];

console.log(emp1[0][0]);
console.log(emp1[0][1]);
console.log(emp1[1][0]);
console.log(emp1[1][1]);
console.log(emp1[2][0]);
