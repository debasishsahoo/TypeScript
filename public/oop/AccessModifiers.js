"use strict";
//Private ->Same Class Access only
//Protected
//Public ->Any one can Access
class Person {
    constructor(id, firstName, lastName) {
        this.VoterId = id;
        this.FirstName = firstName;
        this.LastName = lastName;
    }
    GetFullName() {
        return `${this.FirstName}  ${this.LastName}`;
    }
    GetID() {
        return `${this.VoterId}`;
    }
}
let person = new Person('A7455BZ', 'Abdul', 'AZIM');
console.log('person:', person);
console.log('person:', person.GetID());
