let StudentName: string = 'Debasish';
let StudentDept: string = 'CS';

//before ES6
let outcome1: string = StudentName + ' Study in the' + StudentDept + 'Dept';

//After ES6
let outcome2: string = `${StudentName}  Study in the ${StudentDept} Dept`;

console.log(outcome1);
console.log(outcome2);

//charAt()

let str: string = 'Hello TypeScript';

console.log(str.charAt(0));

console.log(str.charAt(2));

console.log('Hello World'.charAt(6));


//concat()
let str1: string = 'Hello ';
let str2: string = 'TypeScript';
console.log(str1.concat(str2));
console.log(str1.concat(' ', str2));
console.log(str1.concat(' Mr. ', 'Bond'));

//indexOf()

let str3: string = 'TypeScript';

console.log(str3.indexOf('T'));
console.log(str3.indexOf('p'));
console.log(str3.indexOf('e'));
console.log(str3.indexOf('T', 1));
console.log(str3.indexOf('t', 1));

//replace()
str1 = 'Hello Javascript';
str2 = 'TypeScript';

console.log(str1.replace('Java', 'Type'));
console.log(str1.replace('JavaScript', str2));
console.log(str1.replace(/Hello/gi, 'Hi'));

//split()

str1 = 'Apple, Banana, Orange';
str2 = ',';

console.log(str1.split(str2));

console.log(str1.split(','));

console.log(str1.split(',', 2));

console.log(str1.split(',', 1));

//toUpperCase()
str = 'Hello Typescript';

console.log(str.toUpperCase());

console.log('hello typescript'.toUpperCase());

//toLowerCase()

console.log(str.toLowerCase());

console.log('HELLO TYPESCRIPT'.toLowerCase());
