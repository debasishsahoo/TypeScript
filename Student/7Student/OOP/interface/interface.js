"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//interface implemention on Class
class Customer {
    constructor() {
        this.firstname = 'Debasish';
        this.lastname = 'Sahoo';
        this.age = 34;
        this.gender = 'M';
    }
    getDetails() {
        console.log('ok');
    }
    getAge() {
        return this.age;
    }
}
//interface implemention on variable
let Student = {
    firstname: 'Debasish',
    lastname: 'Sahoo',
    age: 34,
    gender: 'M',
    getDetails() {
        console.log('ok');
    },
    getAge() {
        return this.age;
    },
};
function OperationgSystem(args) {
    console.log(`OS NAME:${args.name} ,OS VERSION:${args.version} and OS LANGUAGE:${args.language}`);
}
let WIN10 = {
    name: 'WINDOWS 10',
    version: 10,
    language: 'VBSCRIPT',
};
let WIN11 = {
    name: 'WINDOWS 11',
    version: 11,
    language: 'C#',
};
let PIE = {
    name: 'PIE',
    version: 12,
    language: 'JAVA',
};
OperationgSystem(WIN10);
OperationgSystem(WIN11);
OperationgSystem(PIE);
