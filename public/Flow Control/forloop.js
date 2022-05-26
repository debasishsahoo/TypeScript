"use strict";
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log('End of Loop');
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); //i is not defined
for (var i1 = 0; i1 < 5; i1++) {
    console.log(i1);
}
console.log(i1); //5
let i2 = 0;
for (;; i2++) {
    console.log(i2);
}
let i3 = 0;
for (;; i3++) {
    if (i3 >= 5)
        break;
    console.log(i3);
}
let i4 = 0;
for (;;) {
    if (i4 >= 5)
        break;
    console.log(i4);
    i++;
}
for (let i5 = 0; i5 < 5; i5++) {
    console.log(i5);
}
let i6 = 0;
for (let i6 = 0; i6 < 5; i6++) {
    if (i6 < 2)
        continue;
    console.log(i6);
}
let i7 = 0;
for (let i7 = 5; i7 > 0; i7--) {
    console.log(i);
}
for (let i8 = 0, j8 = 0; i8 < 5; i8 = j8 + 1, j8++, i8++) {
    console.log(i8 + j8);
}
let sum = 0;
for (let i = 0; i <= 5; sum = sum + i, i++)
    ;
console.log(sum);
let persons = new Array('John', 'Ann', 'Aaron', 'Edwin', 'Elizabeth');
for (let i = 0; i < persons.length; i++) {
    console.log(persons[i]);
}
