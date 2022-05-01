"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let student1 = {
    studentCode: '1',
    division: '10',
    name: 'Rahul',
    age: 20,
};
let student2 = {
    studentCode: '1',
    division: '10',
    age: 20,
};
let student3 = {
    studentCode: '1',
    division: '10',
    name: 'rahul',
    age: 20,
};
let student4 = {
    studentCode: '1',
    division: '10',
    name: 'rahul',
    age: 20, //ERROR
};
let student5 = {
    studentCode: '1',
    division: '10',
    name: 'rahul',
    age: 20,
    address: {
        //Intersection of Homeaddress & Officeaddress
        Home1: '',
        Home2: '',
        Office1: '',
        Office2: '',
    },
};
