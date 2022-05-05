"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student1 = {
    studentCode: '1',
    division: '10',
    name: 'Rahul',
    age: 20,
};
var student2 = {
    studentCode: '1',
    division: '10',
    age: 20,
};
var student3 = {
    studentCode: '1',
    division: '10',
    name: 'rahul',
    age: 20,
};
var student4 = {
    studentCode: '1',
    division: '10',
    name: 'rahul',
    age: 20, //ERROR
};
var student5 = {
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
