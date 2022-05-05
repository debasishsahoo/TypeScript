"use strict";
for (var i_1 = 0; i_1 < 5; i_1++) {
    console.log(i_1);
}
console.log('End of Loop');
for (var i_2 = 0; i_2 < 5; i_2++) {
    console.log(i_2);
}
console.log(i); //i is not defined
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); //5
var i = 0;
for (;; i++) {
    console.log(i);
}
var i = 0;
for (;; i++) {
    if (i >= 5)
        break;
    console.log(i);
}
var i = 0;
for (;;) {
    if (i >= 5)
        break;
    console.log(i);
    i++;
}
for (var i_3 = 0; i_3 < 5; i_3++) {
    console.log(i_3);
}
var i = 0;
for (var i_4 = 0; i_4 < 5; i_4++) {
    if (i_4 < 2)
        continue;
    console.log(i_4);
}
var i = 0;
for (var i_5 = 5; i_5 > 0; i_5--) {
    console.log(i_5);
}
for (var i_6 = 0, j_1 = 0; i_6 < 5; i_6 = j_1 + 1, j_1++, i_6++) {
    console.log(i_6 + j_1);
}
var sum = 0;
for (var i_7 = 0; i_7 <= 5; sum = sum + i_7, i_7++)
    ;
console.log(sum);
var persons = new Array('John', 'Ann', 'Aaron', 'Edwin', 'Elizabeth');
for (var i_8 = 0; i_8 < persons.length; i_8++) {
    console.log(persons[i_8]);
}
