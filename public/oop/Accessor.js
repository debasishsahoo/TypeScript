"use strict";
let passcode = 'secret passcode';
class Student {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (passcode && passcode == 'secret passcode') {
            this._fullName = newName;
        }
        else {
            console.log('Unauthorized update of student detail!');
        }
    }
}
let stud = new Student();
stud.fullName = 'Virat Kohli';
if (stud.fullName) {
    console.log(stud.fullName);
}
