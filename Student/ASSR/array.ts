// export {};
// let a: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //                 0  1  2  3  4  5  6  7  8  9

// let b: string[] = ['a', 'b', 'c', 'd', 'suman'];

// let c: boolean[] = [true, false, true, false];
// let d: any[] = ['a', 1, true, 5, 'rohit', 'b', 45];

// console.log('Value of:', a.length);
// console.log('Value of:', b.length);
// console.log('Value of:', c.length);
// console.log('Value of:', d.length);

// let list1: Array<number> = [1, 2, 5];
// let list2: Array<string> = ['a', 'b', 'c'];
// let list3: Array<boolean> = [true, false];
// let list4: Array<any> = [true, false, 1, 5, 'a'];

// console.log('Value of:', list1.length);
// console.log('Value of:', list2.length);
// console.log('Value of:', list3.length);
// console.log('Value of:', list4.length);

// let Student: string[] = ['Amit', 'Rohit', 'Supriya'];
// console.log('Student:', Student[0]);
// console.log('Student:', Student[1]);
// console.log('Student:', Student[2]);

// Student.push('Suman');
// console.log('Student:', Student[3]);

// console.log('Student:', Student[4]);

// Student[4] = 'Rittick';

// console.log('Student:', Student[4]);
// console.log('Student:', Student);

// Student.push('Shaqlin');

// console.log('Student:', Student[5]);

// //Student[0] = 'Indronile';
// Student.push('Indronile');
// console.log('Student:', Student);
// console.log('Student:', Student.pop());
// console.log('Student:', Student);
// console.log('Student:', Student.pop());
// console.log('Student:', Student);
// console.log('Student:', Student.pop());
// console.log('Student:', Student);
// console.log('Student:', Student.pop());
// console.log('Student:', Student);
// console.log('Student:', Student.pop());
// console.log('Student:', Student);
// console.log('Student:', Student.pop());
// console.log('Student:', Student);
// console.log('Student:', Student.pop());
// console.log('Student:', Student);

let Student1: string[] = ['Amit', 'Rohit', 'Supriya', 'Shaqlin', 'Suman'];

console.log(
  'Student list:',
  Student1.map((e) => e)
);

for (let i = 0; i <= Student1.length; i++) {
  console.log(Student1[i]);
}

//[1,2,3,4,'FIVE',6,7,8,9,'Ten']

let Arr4: Array<number | string> = [1, 2, 3, 4, 'FIVE', 6, 7, 8, 9, 'Ten'];

let Arr5: (number | string | boolean | bigint)[] = [
  1,
  2,
  true,
  4,
  'FIVE',
  6,
  false,
  8,
  'Ten',
];

let arr6: any[] = [1, 2, null];

//Access Array Elements
console.log(arr6[0]);

console.log(arr6[2]);

//Loop
for (let index in Arr5) {
  console.log(Arr5[index]);
}

//Arr5[0]
//Arr5[1]
//Arr5[2]
//Arr5[3]
//Arr5[4]
//Arr5[5]
//Arr5[6]
//Arr5[7]
//Arr5[8]
//Arr5[9]

for (let i = 0; i < Arr5.length; i++) {
  console.log(Arr5[i]);
}

let Arr9: Array<number> = [1, 8, 9, 2, 3, 4, 6, 7];

console.log('Arr9:', Arr9);


console.log('Arr9:', Arr9.reverse());

console.log('Arr9:', Arr9.sort());

console.log('Arr9:', Arr9.sort().reverse());




console.log('Arr9:', Arr9);
