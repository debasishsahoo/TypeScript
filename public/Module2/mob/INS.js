"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student = require("./Student");
const teacher = require("./teacher");
function ShowAllDetails(obj) {
    obj.display();
}
ShowAllDetails(new student.Student());
ShowAllDetails(new teacher.Teacher());
