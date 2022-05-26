"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Company {
    constructor(ContactName, ContactCountry) {
        this.Country = 'India';
        this.name = ContactName;
        this.Country = ContactCountry;
    }
    ShowDetails() {
        console.log(this.name + `:` + this.Country);
    }
}
const com = new Company('RJA SOLUTIONS', 'UK');
com.ShowDetails();
com.name = 'TCS';
com.Country = 'USA';
