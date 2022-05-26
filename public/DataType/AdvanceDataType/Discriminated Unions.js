"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AllowRestrictedArea(person) {
    console.log(person.employeecode); //Property 'employeecode' does not exist on type 'Person'.
    if (person.type == 'Employee') {
        console.log('Allowed to Employee ' + person.employeecode);
        return true;
    }
    else if (person.type == 'Visitor') {
        console.log('Not Allowed to Visitor ' + person.visitorcode);
        return false;
    }
    else {
        console.log('Allowed to Contractors ' + person.contractorcode);
        return true;
    }
}
function AllowRestrictedArea(person) {
    console.log(person.employeecode); //Property 'employeecode' does not exist on type 'Person'.
}
function AllowRestrictedArea(person) {
    //console.log(person.employeecode) //Property 'employeecode' does not exist on type 'Person'.
    if (person.type == "Employee") {
        console.log("Allowed to Employee " + person.employeecode);
        return true;
    }
    else if (person.type == "Visitor") {
        console.log("Not Allowed to Visitor " + person.visitorcode);
        return false;
    }
    else {
        console.log("Allowed to Contractors " + person.contractorcode);
        return true;
    }
}
let employee = { type: "Employee", employeecode: 1, name: "Rahul" };
AllowRestrictedArea(employee);
let vistor = { type: "Visitor", visitorcode: 1, name: "Sachin" };
AllowRestrictedArea(vistor);
let contractor = { type: "Contractor", contractorcode: 1, name: "Saurav" };
AllowRestrictedArea(contractor);
