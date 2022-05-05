"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student = require("./Student");
var teacher = require("./Teacher");
function showAllDetails(detailsToShow) {
    detailsToShow.display();
}
showAllDetails(new student.Student());
showAllDetails(new teacher.Teacher());
