"use strict";
//Numeric Enum
//String Enum
//Heterogeneous Enum
//String Enum
var BTECH;
(function (BTECH) {
    BTECH["CIVIL"] = "CIVIL ENGG";
    BTECH["MACH"] = "MACHNACAL ENGG";
    BTECH["EC"] = "ELECTRAL ENGG";
    BTECH["ECE"] = "ELECTRONIC ENGG";
    BTECH["CS"] = "COMPUTER SCIENCE";
})(BTECH || (BTECH = {}));
var Student;
(function (Student) {
    Student[Student["SAHNIK"] = 0] = "SAHNIK";
    Student[Student["SOUMYDEEP"] = 1] = "SOUMYDEEP";
    Student[Student["SOURAV"] = 2] = "SOURAV";
})(Student || (Student = {}));
var SALARY;
(function (SALARY) {
    SALARY[SALARY["SAHNIK"] = 14000] = "SAHNIK";
    SALARY[SALARY["SOUMYDEEP"] = 24000] = "SOUMYDEEP";
    SALARY[SALARY["SOURAV"] = 34000] = "SOURAV";
})(SALARY || (SALARY = {}));
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
function IsItSummer(month) {
    let isSummer;
    switch (month) {
        case Month.Jan:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(IsItSummer(Month.Feb));
