export {};

//using Array[] Sign
let list: number[] = [1, 2, 3];
console.log(list);
console.log(typeof list);

//using Array Class
let list2: Array<number> = [1, 2, 3, 4];
console.log(list2);
console.log(typeof list2);

let Skills: string[] = ['Typescript'];
//Index
Skills[1] = 'Node';
Skills[2] = 'React';
//Method
Skills.push('MongoDB');
console.log('Skills:', Skills);

Skills.pop();
console.log('Skills:', Skills);

let List3: Array<number | string> = [1, 2, 3, 'Dev', 'Sahoo', 5, 6];

let List4: (number | string)[] = [1, 2, 3, 'Dev', 'Sahoo', 5, 6];

//Accessing the Array Element

for (let i = 0; i < List3.length; i++) {
  console.log(List3[i]);
}

//x458ty,wedfw,5ddqd48,
for (let x in List4) {
  console.log(List4[x]);
}
