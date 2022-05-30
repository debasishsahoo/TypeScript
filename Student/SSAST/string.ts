// export {};
// let ax1: number = 1;
// let ax2: number = 2;
// console.log(`The add id ${ax1} +${ax2} is ${ax1 + ax2}`);

// let s: number = 10;
// console.log(`The m is ${s == 10 ? 'ten' : 'Not Ten'}`);

// let varx = `${ax1 + ax2}`;

// console.log(`The add id ${ax1} +${ax2} is ${varx}`);

// //strings-> Template Type Array
// //...expr -> Varieble Array
// let firstName: string = 'Debasish';
// let lastName: string = 'Sahoo';
// let topic: string = 'Typescript';
// let student1: string = 'Anirban';
// let Student_1: string = 'Mishra';
// let student2: string = 'Ritesh Saha';
// let student3: string = 'Subhadip Das';

// //we need this thing on REACT
// function say(strings: TemplateStringsArray, ...expr: string[]) {
//   console.log(strings);

//   console.log(expr);
//   return '';
// }

// say`Welcome, ${firstName} ${lastName}. Learn ${topic} here and ${student1},${Student_1}`;

// console.log(
//   `I have Three Student Named, ${student1}' '${Student_1},${student2},${student3}`
// );
// //I have Three Student Named, ->         Template String Array
// //${student1},${student2},${student3}->  Expression String Array

export {};
let firstName: string = 'Sachin';
let lastName: string = 'Tendulkar';
let topic = 'Typescript';

function say1(
  strings: TemplateStringsArray,
  firstName: string,
  lastName: string,
  topic: string
) {
  console.log(strings);
  console.log(strings[0]);
  console.log(firstName);
  console.log(strings[1]);
  console.log(lastName);
  console.log(strings[2]);
  console.log(topic);
  console.log(strings[3]);


  let str =
    strings[0] +
    firstName +
    strings[1] +
    lastName +
    strings[2] +
    topic +
    strings[3];
  return str;
}
console.log(say1`Welcome, ${firstName} ${lastName}. Learn ${topic} here`);
