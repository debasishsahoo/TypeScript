"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student = require("./Student");
const teacher = require("./Teacher");
function showAllDetails(detailsToShow) {
    detailsToShow.display();
}
showAllDetails(new student.Student());
showAllDetails(new teacher.Teacher());
