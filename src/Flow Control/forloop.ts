for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log('End of Loop');

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); //i is not defined

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i); //5

let i: number = 0;
for (; ; i++) {
  console.log(i);
}

let i = 0;
for (; ; i++) {
  if (i >= 5) break;
  console.log(i);
}

let i = 0;
for (;;) {
  if (i >= 5) break;
  console.log(i);
  i++;
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
for (let i = 0; i < 5; i++) {
  if (i < 2) continue;
  console.log(i);
}

let i = 0;
for (let i = 5; i > 0; i--) {
  console.log(i);
}

for (let i = 0, j = 0; i < 5; i = j + 1, j++, i++) {
  console.log(i + j);
}

let sum = 0;

for (let i = 0; i <= 5; sum = sum + i, i++);

console.log(sum);

let persons = new Array('John', 'Ann', 'Aaron', 'Edwin', 'Elizabeth');
for (let i = 0; i < persons.length; i++) {
  console.log(persons[i]);
}
