let StudentName: string = 'Debasish';
let StudentDept: string = 'CS';

//before ES6
let outcome1: string = StudentName + ' Study in the ' + StudentDept + ' Dept ';

//After ES6
let outcome2: string = `${StudentName} Study in the ${StudentDept} dept`;

console.log(outcome1);
console.log(outcome2);

let message = 'Hello World';
console.log(message);
console.log(typeof message);

//String function
let color = String('red');
console.log(color);
console.log(typeof color);

let sentence: string = `Hello, welcome to the world of typescript,
          the typed super of javascript`;
console.log(sentence);

let longString =
  'This is an example of long single line of string and it goes out of my editor screen so i need to wrap it';

let longString1 =
  'This is an example of long single line of string ' +
  'and it goes out of my editor screen ' +
  'so i need to wrap it';
console.log(longString1);

let longString2 =
  'This is an example of long single line of string \
and it goes out of my editor screen \
so i need to wrap it';
console.log(longString2);

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
console.log(str3.indexOf('r', 3));

console.log(str3.indexOf('t', 3));

let strValue = 'This is a primitive string. But is has properties & methods';
let pos = strValue.indexOf('primitive');
console.log(pos);

//replace()
str1 = 'Hello Javascript';
str2 = 'TypeScript';

console.log(str1.replace('Java', 'Type'));
console.log(str1.replace('JavaScript', str2));
//console.log(str1.replace(/Hello/gi, 'Hi'));

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

//Using Expressions
let ax1: number = 1;
let bx1: number = 2;
console.log(`The addion of ${ax1} + ${bx1} is ${ax1 + bx1}`);

let m = 10;
console.log(`The m is ${m == 10 ? 'ten' : 'not ten'}`);

const MAX = 100;

function doSomeWork(argument: number) {
  if (argument > MAX) {
    throw new Error(`At most ${MAX} allowed: ${argument} Given!`);
  }
}

doSomeWork(100);

//Nesting Expressions

let x = 10;
let y = 20;
let varxy = `${x + y}`;
console.log(`The addion of ${x} + ${y} is ${varxy}`);

//Escaping in template strings

console.log('`');

console.log('$');

console.log('${');

console.log('${');

console.log('${}');

//Tagged Template

let msg: string = 'Hello Debassis';

function hi(strings: TemplateStringsArray, name: string) {
  console.log('name:', name);
  console.log('strings:', strings);
  return 'Hi';
}

console.log(`${msg} world`);

console.log(hi`${msg}Hello`);

//Parameters to Tagged Function

let firstName: string = 'Sachin';
let lastName: string = 'Tendulkar';
let topic = 'Typescript';

function say(
  strings: TemplateStringsArray,
  firstName: string,
  lastName: string,
  topic: string
) {
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

console.log(say`Welcome, ${firstName} ${lastName}. Learn ${topic} here`);

function say1(strings: TemplateStringsArray, ...expr: string[]) {
  console.log(strings);
  console.log(expr);
  return '';
}

say1`Welcome, ${firstName} ${lastName}. Learn ${topic} here`;

function say2(strings: TemplateStringsArray, ...expr: string[]) {
  let str = '';

  strings.forEach((string, i) => {
    str += string + (expr[i] || '');
  });

  return str;
}

console.log(say2`Welcome, ${firstName} ${lastName}. Learn ${topic} here`);

//Raw strings
let filePath: string = `C:\Development\\profile\aboutme.html`;
console.log(`uploaded from: ${filePath}`);

function tag(strings: TemplateStringsArray) {
  console.log(strings.raw);
  console.log(strings);
}

tag`string text line 1 \n string text line 2`;

//Unary plus (+)
console.log(+'100');
console.log(+'100.5175');
console.log(+'10AA0.5175');
console.log(+'');
console.log(+' ');
// console.log(+null);
// console.log(+undefined);
console.log(+Infinity);
console.log(+true);
console.log(+false);
console.log(+'0x22');
console.log(+'0022');
console.log(+'0o51');
console.log(+'3.125e7');
console.log(+'35 35');
console.log(+'AB 35');

//ParseInt

console.log(parseInt('100'));
console.log(parseInt('100.5175'));
console.log(parseInt('10AA0.5175'));
console.log(parseInt(''));
// console.log(parseInt(null));
// console.log(parseInt(Infinity));
// console.log(parseInt(true));
// console.log(parseInt(false));
console.log(parseInt('0x22'));
console.log(parseInt('0022'));
console.log(parseInt('0o51'));
console.log(parseInt('3.125e7'));
console.log(parseInt('35 35'));
console.log(parseInt('AB 35'));
//decimal to Ocatal & Hex
console.log(parseInt('51'));
console.log(parseInt('51', 8));
console.log(parseInt('51', 16));
//Ocatal to Ocatal & Hex
console.log(parseInt('051'));
console.log(parseInt('051', 8));
console.log(parseInt('051', 16));
//hex to Ocatal & Hex
console.log(parseInt('0x51'));
console.log(parseInt('0x51', 8));
console.log(parseInt('0x51', 16));
//Binary to Ocatal & Hex
console.log(parseInt('0o51'));
console.log(parseInt('0o51', 8));
console.log(parseInt('0o51', 16));

//Parsefloat

console.log(parseFloat('100'));
console.log(parseFloat('100.5175'));
console.log(parseFloat('10AA0.5175'));
console.log(parseFloat(''));
// console.log(parseFloat(null));
// console.log(parseFloat(Infinity));
// console.log(parseFloat(true));
// console.log(parseFloat(false));
console.log(parseFloat('0x22'));
console.log(parseFloat('0022'));
console.log(parseFloat('0o51'));
console.log(parseFloat('3.125e7'));
console.log(parseFloat('35 35'));
console.log(parseFloat('AB 35'));

//Number global function

console.log(Number('100'));
console.log(Number('100.5175'));
console.log(Number('10AA0.5175'));
console.log(Number(''));
console.log(Number(' '));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(Infinity));
console.log(Number(true));
console.log(Number(false));
console.log(Number('0x22'));
console.log(Number('0022'));
console.log(Number('0o51'));
console.log(Number('3.125e7'));
console.log(Number('35 35'));
console.log(Number('AB 35'));

//Check for NaN

convertToNumber('AB 35');
convertToNumber('35');

function convertToNumber(numVal1: string) {
  if (isNaN(+numVal1)) {
    console.log('Number is NaN');
  } else {
    console.log(+numVal1);
  }
}
