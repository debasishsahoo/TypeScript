"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student = require("./Student");
const teacher = require("./Teacher");
function ShowAll_Details(obj) {
    obj.display();
}
ShowAll_Details(new student.Student());
ShowAll_Details(new teacher.Teacher());
