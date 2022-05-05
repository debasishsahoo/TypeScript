"use strict";
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
//Without break
operation = '-';
console.log('switch example');
switch (operation) {
    case '+':
        console.log(val1 + val2);
    case '-':
        console.log(val1 - val2);
    case '*':
        console.log(val1 * val2);
    case '/':
        console.log(val1 / val2);
    default:
        console.log('Invalid operator');
}
console.log('switch finished');
//Default Clause
operation = '=';
console.log('switch example');
switch (operation) {
    case '+':
        console.log(val1 + val2);
    case '-':
        console.log(val1 - val2);
    case '*':
        console.log(val1 * val2);
    case '/':
        console.log(val1 / val2);
    default:
        console.log('Invalid operator');
}
console.log('switch finished');
//Default Clause Location
operation = '=';
console.log('switch example');
switch (operation) {
    default:
        console.log('Invalid operator');
        break;
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
}
console.log('switch finished');
//breaks from a switch
let val = calculator(20, 10, '+');
console.log(val);
function calculator(val1, val2, operation) {
    switch (operation) {
        default:
            console.log('Invalid operator');
            return 0;
        case '+':
            return val1 + val2;
        case '-':
            return val1 - val2;
        case '*':
            return val1 * val2;
            break;
        case '/':
            return val1 / val2;
    }
}
//Grouping of Cases
let options = '3';
switch (options) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
        console.log('<=5');
        break;
    case '6':
    case '7':
    case '8':
    case '9':
    case '10':
        console.log('>5 & <=10');
        break;
    default:
        console.log('Invalid');
}
//Strict Equality Check
let options = 3;
switch (options) {
    case '1':
        console.log('1');
        break;
    case '2':
        console.log('2');
        break;
    case '3':
        console.log('3');
        break;
    case '4':
        console.log('4');
        break;
    default:
        console.log('Invalid');
}
let options = 3;
switch (options) {
    case a:
        console.log('1');
        break;
    case a + 1:
        console.log('2');
        break;
    case b + 1:
        console.log('3');
        break;
    case b * b:
        console.log('4');
        break;
    default:
        console.log('Invalid');
}
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
var VehcileType;
(function (VehcileType) {
    VehcileType[VehcileType["Car"] = 0] = "Car";
    VehcileType[VehcileType["Plane"] = 1] = "Plane";
    VehcileType[VehcileType["Train"] = 2] = "Train"; //2
})(VehcileType || (VehcileType = {}));
let num = VehcileType.Plane;
switch (+num) {
    case VehcileType.Car:
        console.log("Car");
        break;
    case VehcileType.Plane:
        console.log("Plane");
        break;
    case VehcileType.Train:
        console.log("Train");
        break;
    default:
        break;
}
