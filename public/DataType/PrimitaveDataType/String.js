"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var StudentName = 'Debasish';
var StudentDept = 'CS';
//before ES6
var outcome1 = StudentName + ' Study in the' + StudentDept + 'Dept';
//After ES6
var outcome2 = "".concat(StudentName, "  Study in the ").concat(StudentDept, " Dept");
console.log(outcome1);
console.log(outcome2);
var message = 'Hello World';
console.log(message);
console.log(typeof message);
//String function
var color = String('red');
console.log(color);
console.log(typeof color);
var sentence = "Hello, welcome to the world of typescript,\n          the typed super of javascript";
console.log(sentence);
var longString = 'This is an example of long single line of string and it goes out of my editor screen so i need to wrap it';
var longString1 = 'This is an example of long single line of string ' +
    'and it goes out of my editor screen ' +
    'so i need to wrap it';
console.log(longString1);
var longString2 = 'This is an example of long single line of string \
and it goes out of my editor screen \
so i need to wrap it';
console.log(longString2);
//charAt()
var str = 'Hello TypeScript';
console.log(str.charAt(0));
console.log(str.charAt(2));
console.log('Hello World'.charAt(6));
//concat()
var str1 = 'Hello ';
var str2 = 'TypeScript';
console.log(str1.concat(str2));
console.log(str1.concat(' ', str2));
console.log(str1.concat(' Mr. ', 'Bond'));
//indexOf()
var str3 = 'TypeScript';
console.log(str3.indexOf('T'));
console.log(str3.indexOf('p'));
console.log(str3.indexOf('e'));
console.log(str3.indexOf('T', 3));
console.log(str3.indexOf('t', 3));
var strValue = 'This is a primitive string. But is has properties & methods';
var pos = strValue.indexOf('primitive');
console.log(pos);
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
//Using Expressions
var ax1 = 1;
var bx1 = 2;
console.log("The addion of ".concat(ax1, " + ").concat(bx1, " is ").concat(ax1 + bx1));
var m = 10;
console.log("The m is ".concat(m == 10 ? 'ten' : 'not ten'));
var MAX = 100;
function doSomeWork(argument) {
    if (argument > MAX) {
        throw new Error("At most ".concat(MAX, " allowed: ").concat(argument, " Given!"));
    }
}
doSomeWork(100);
//Nesting Expressions
var x = 10;
var y = 20;
var varxy = "".concat(x + y);
console.log("The addion of ".concat(x, " + ").concat(y, " is ").concat(varxy));
//Escaping in template strings
console.log('`');
console.log('$');
console.log('${');
console.log('${');
console.log('${}');
//Tagged Template
var msg = 'Hello Debassis';
function hi(strings, name) {
    console.log('name:', name);
    console.log('strings:', strings);
    return 'Hi';
}
console.log("".concat(msg, " world"));
console.log(hi(__makeTemplateObject(["", "Hello"], ["", "Hello"]), msg));
//Parameters to Tagged Function
var firstName = 'Sachin';
var lastName = 'Tendulkar';
var topic = 'Typescript';
function say(strings, firstName, lastName, topic) {
    var str = strings[0] +
        firstName +
        strings[1] +
        lastName +
        strings[2] +
        topic +
        strings[3];
    return str;
}
console.log(say(__makeTemplateObject(["Welcome, ", " ", ". Learn ", " here"], ["Welcome, ", " ", ". Learn ", " here"]), firstName, lastName, topic));
function say1(strings) {
    var expr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        expr[_i - 1] = arguments[_i];
    }
    console.log(strings);
    console.log(expr);
    return '';
}
say1(__makeTemplateObject(["Welcome, ", " ", ". Learn ", " here"], ["Welcome, ", " ", ". Learn ", " here"]), firstName, lastName, topic);
function say2(strings) {
    var expr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        expr[_i - 1] = arguments[_i];
    }
    var str = '';
    strings.forEach(function (string, i) {
        str += string + (expr[i] || '');
    });
    return str;
}
console.log(say2(__makeTemplateObject(["Welcome, ", " ", ". Learn ", " here"], ["Welcome, ", " ", ". Learn ", " here"]), firstName, lastName, topic));
//Raw strings
var filePath = "C:Developmentprofileaboutme.html";
console.log("The file was uploaded from: ".concat(filePath));
function tag(strings) {
    console.log(strings.raw);
    console.log(strings);
}
tag(__makeTemplateObject(["string text line 1 \n string text line 2"], ["string text line 1 \\n string text line 2"]));
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
//Parseint
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
console.log(parseInt('51'));
console.log(parseInt('51', 8));
console.log(parseInt('51', 16));
console.log(parseInt('051'));
console.log(parseInt('051', 8));
console.log(parseInt('051', 16));
console.log(parseInt('0x51'));
console.log(parseInt('0x51', 8));
console.log(parseInt('0x51', 16));
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
function convertToNumber(numVal1) {
    if (isNaN(+numVal1)) {
        console.log('Number is NaN');
    }
    else {
        console.log(+numVal1);
    }
}
