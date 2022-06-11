"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getArray(item) {
    return new Array().concat(item);
}
let MyNumArr = getArray([100, 200, 300]);
let MyStrArr = getArray(['Hello', 'World']);
console.log('MyNumArr:', MyNumArr);
console.log('MyStrArr:', MyStrArr);
MyNumArr.push(400);
