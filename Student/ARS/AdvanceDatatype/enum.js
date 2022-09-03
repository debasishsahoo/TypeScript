"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Enum is class that represent Group of Constant
//By default Enum is Numaric
//we have to assign string by manully
var Month;
(function (Month) {
    Month[Month["January"] = 0] = "January";
    Month[Month["February"] = 1] = "February";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
    Month[Month["August"] = 7] = "August";
    Month[Month["September"] = 8] = "September";
    Month[Month["October"] = 9] = "October";
    Month[Month["November"] = 10] = "November";
    Month[Month["December"] = 11] = "December";
})(Month || (Month = {}));
console.log(Month.January);
console.log(Month.February);
console.log(Month.March);
console.log(Month.April);
var week;
(function (week) {
    week[week["Sunday"] = 1] = "Sunday";
    week[week["Monday"] = 2] = "Monday";
    week[week["Tuesday"] = 3] = "Tuesday";
    week[week["Wednesday"] = 4] = "Wednesday";
    week[week["Thrusday"] = 5] = "Thrusday";
    week[week["Friday"] = 6] = "Friday";
    week[week["Saturday"] = 7] = "Saturday";
})(week || (week = {}));
console.log(week.Monday);
console.log(week.Tuesday);
console.log(week.Wednesday);
console.log(week.Thrusday);
console.log(week.Friday);
console.log(week.Saturday);
console.log(week.Sunday);
console.log(week[1]);
var branchs;
(function (branchs) {
    branchs[branchs["CSE"] = 0] = "CSE";
    branchs[branchs["ECE"] = 1] = "ECE";
    branchs[branchs["EE"] = 2] = "EE";
    branchs[branchs["CE"] = 3] = "CE";
    branchs[branchs["ME"] = 4] = "ME";
})(branchs || (branchs = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.NotFound);
console.log(StatusCode[200]);
console.log(StatusCode['Accepted']);
function DOB(weekday, month, strem) {
    return `In the Month of ${month} and the day is ${weekday}, and branch:${strem}`;
}
console.log(DOB(week['3'], Month['3'], branchs['1']));
