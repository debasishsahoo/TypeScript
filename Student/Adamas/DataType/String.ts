export {};
let StudentName: string = 'Debasish'; //String
let Class: string = 'A';
let Age: string = '34';
//This is the We use Before ES6
console.log('Name:' + StudentName + ',Class:' + Class + ',Age:' + Age);

//This is we use After ES6 .This is Call the LITERALS
console.log(`Name:${StudentName},Class:${Class},Age:${Age}`);

//CharAt()  work based on Index value
let Name: string = 'Ravi Sharma';
//01234567891011
let Dept: string = 'B-Tech';
console.log(Name.charAt(0));
console.log(Name.charAt(1));
console.log(Name.charAt(2));
console.log(Name.charAt(3));

//concat()
console.log(Name.concat(Dept));

console.log(Name.concat(' Studed in ', ' ', Dept, ' and '));

//It will Work Based on ASCII
console.log(Name.indexOf('R'));
console.log(Name.indexOf('r'));
console.log(Name.indexOf('a'));
console.log(Name.indexOf('v', 3));
console.log(Name.indexOf('z'));

//Search Value

let item: string =
  'Ravi Sharma is a Good Boy and he is playing PUBG and eating PARLEG';

console.log(item.indexOf('G'));

const Result: number[] = [];
const Element: string = 'o';
let idx = item.indexOf(Element);

while (idx !== -1) {
  Result.push(idx);
  idx = item.indexOf(Element, idx + 1);
}
console.log('Index of a', Result);

console.log('Number of a:', Result.length);

//Replace
let Str1: string = 'Hello TypeScript';
let Str2: string = 'Javascript';

console.log(Str1.replace('Type', 'Java'));
console.log(Str1.replace('TypeScript', Str2));

//Split
Str1 = 'Apple,Banana,Orage';
Str2 = ',';

console.log(Str1.split(','));

console.log(Str1.split(',', 2));

console.log(Str1.split(',', 1));

Str1 = 'Debasish';
Str2 = 'Sahoo';

console.log(Str1.toUpperCase());

console.log(Str2.toLowerCase());

//Inline Expression

let Ex1: number = 6;
let Ex2: number = 8;

console.log(`The addion of ${Ex1} and  ${Ex2} is ${Ex1 + Ex2}`);

console.log(`The Ex1 is ${Ex1 == 5 ? 'Five' : 'not Five'}`);

let msg: string = 'Hello Debasish Sahoo';
function fun(args: TemplateStringsArray, name: string) {
  console.log(args);
  console.log(name);
  return 'ok';
}

console.log(`${msg} World`);

console.log(fun`${msg} World`);

let a: string = 'Sachin';
let b: string = 'Tendulkar';
let c: string = 'Batting';

function Say(
  strings: TemplateStringsArray,
  fn: string,
  topic: string,
  ln: string
) {
  console.log(strings[0]);
  console.log(strings[1]);
  console.log(strings[2]);
  console.log(strings[3]);
  console.log(strings[4]);
  console.log(strings[5]);
  console.log(strings[6]);
  console.log(fn);
  console.log(ln);
  console.log(topic);
  return 'ok';
}

console.log(Say`Welcome,${a}+ ${b}.Learn ${c} from him`);

function Say1(strings: TemplateStringsArray, ...abcd: string[]) {
  console.log('strings:', strings);
  console.log('expr:', abcd);
  return 'ok';
}

console.log(Say1`Welcome,${a}+ ${b}.Learn ${c} from him`);
