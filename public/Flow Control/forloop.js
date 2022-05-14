"use strict";
for (var i_1 = 0; i_1 < 5; i_1++) {
    console.log(i_1);
}
console.log('End of Loop');
for (var i_2 = 0; i_2 < 5; i_2++) {
    console.log(i_2);
}
console.log(i); //i is not defined
for (var i1 = 0; i1 < 5; i1++) {
    console.log(i1);
}
console.log(i1); //5
var i2 = 0;
for (;; i2++) {
    console.log(i2);
}
var i3 = 0;
for (;; i3++) {
    if (i3 >= 5)
        break;
    console.log(i3);
}
var i4 = 0;
for (;;) {
    if (i4 >= 5)
        break;
    console.log(i4);
    i++;
}
for (var i5 = 0; i5 < 5; i5++) {
    console.log(i5);
}
var i6 = 0;
for (var i6_1 = 0; i6_1 < 5; i6_1++) {
    if (i6_1 < 2)
        continue;
    console.log(i6_1);
}
var i7 = 0;
for (var i7_1 = 5; i7_1 > 0; i7_1--) {
    console.log(i);
}
for (var i8 = 0, j8 = 0; i8 < 5; i8 = j8 + 1, j8++, i8++) {
    console.log(i8 + j8);
}
var sum = 0;
for (var i_3 = 0; i_3 <= 5; sum = sum + i_3, i_3++)
    ;
console.log(sum);
var persons = new Array('John', 'Ann', 'Aaron', 'Edwin', 'Elizabeth');
for (var i_4 = 0; i_4 < persons.length; i_4++) {
    console.log(persons[i_4]);
}
