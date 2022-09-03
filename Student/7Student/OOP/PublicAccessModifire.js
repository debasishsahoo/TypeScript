"use strict";
//Private  -> Same Class Access Only
//Proceted ->
//Public   -> Any one can Access
Object.defineProperty(exports, "__esModule", { value: true });
class Student1 {
    constructor(x, y) {
        //this key word is reference variable that refers to the current object
        this.id = x;
        this.name = y;
    }
}
let Sup = new Student1(1, 'Sup');
let Sum = new Student1(2, 'Sum');
console.log(Sup.id + '' + Sup.name);
console.log(Sum.id + '' + Sum.name);
