for (let i = 0; i < 10; i++) {
  if (i == 6) break;
  console.log(i);
}

let num2 = 0;
while (num2 < 6) {
  if (num2 === 3) {
    break;
  }
  num2 = num2 + 1;
}
console.log(num2);

//Exapmple 1

let val1 = 20;
let val2 = 10;
let operation = '-';

console.log('switch example');

switch (operation) {
  case '+':
    console.log(val1 + val2);
    break;
  case '-':
    console.log(val1 - val2);
    break;
  case '*':
    console.log(val1 * val2);
    break;
  case '/':
    console.log(val1 / val2);
    break;
  default:
    console.log('Invalid operator');
}

console.log('switch finished');

let i = 0;
let j = 0;
let sum = 0;

for (i = 0; i < 10; i++) {
  for (j = 0; j < 10; j++) {
    if (i == 6) break;
  }
}

outerloop: for (i = 0; i < 10; i++) {
  innerloop: for (j = 0; j < 10; j++) {
    if (i == 6) break outerloop;
  }
}

let count = 1;
outer: {
  inner: {
    console.log(count);

    break outer;

    count++;
    console.log(count);
  }

  count++;
  console.log(count);
}

console.log(count);

let z = 0;
blk1: {
  console.log(z);
  break blk2;
}
blk2: {
  console.log(z);
}
console.log(z); //1
