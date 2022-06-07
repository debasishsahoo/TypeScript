"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//number
function identity1(x) {
    return x;
}
function identity2(x) {
    return x;
}
console.log(identity1('Soumyadeep'));
console.log(identity2(23));
//generics
function identity3(x) {
    return x;
}
console.log(identity3('Soumyadeep'));
console.log(identity3(23));
console.log('isMarried:' + identity3(false));
function getitem(item) {
    return new Array().concat(item);
}
let arrString = getitem(['Hello', 'Signik', 'Tu mi kothi']);
arrString.push('Bathroome');
arrString.push('jabo');
console.log('arrNumber:', arrString);
let arrNumber = getitem([40, 48, 75, 96]);
arrNumber.push(40);
arrNumber.push(50);
console.log('arrNumber:', arrNumber);
//Multi Type Verabiile
function Details1(id, name, age) {
    console.log('Id:' + typeof id + ' Name:' + typeof name + ' Age:' + typeof age);
}
Details1(101, 'deb', 45);
//Number:N
//String:S
//Boolean:B
//N1,N2
function Details2(id, name, age) {
    console.log('Id:' + typeof id + ' Name:' + typeof name + ' Age:' + typeof age);
}
Details2(101, 'deb', 45);
//Genaric with non-Genaric Type
function Details3(id, name, age) {
    console.log('Id:' + typeof id + ' Name:' + typeof name + ' Age:' + typeof age);
}
Details3(101, 'deb', 45);
