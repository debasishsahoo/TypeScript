"use strict";
//A Typescript enum allows us to define the collection of related values to be used by name. They make the code easier to read. You may use them when you want to limit the values that a variable can take to a small set of possible values.
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
    var isSummer;
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
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 2] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 4] = "Thursday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 7] = "Sunday";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays.Monday); //1
console.log(Weekdays['Monday']); //1
console.log(Weekdays['1']); //Monday
var holiday = Weekdays.Sunday;
console.log(holiday); //7
console.log(typeof Weekdays); //object
console.log(typeof holiday);
var Week;
(function (Week) {
    Week[Week["Monday"] = 0] = "Monday";
    Week[Week["Tuesday"] = 1] = "Tuesday";
    Week[Week["Wednesday"] = 2] = "Wednesday";
    Week[Week["Thursday"] = 3] = "Thursday";
    Week[Week["Friday"] = 4] = "Friday";
    Week[Week["Saturday"] = 5] = "Saturday";
    Week[Week["Sunday"] = 6] = "Sunday";
})(Week || (Week = {}));
console.log(Weekdays.Monday); //0
console.log(Weekdays['Monday']); //0
console.log(Weekdays['1']); //Tuesday
//Numeric enums
var VehcileType;
(function (VehcileType) {
    VehcileType[VehcileType["Car"] = 0] = "Car";
    VehcileType[VehcileType["Plane"] = 1] = "Plane";
    VehcileType[VehcileType["Train"] = 2] = "Train";
})(VehcileType || (VehcileType = {}));
console.log(VehcileType.Plane); //1
console.log(VehcileType['Plane']); //1
console.log(VehcileType[1]); //Plane
//Get the name from the Enum Member.
console.log(VehcileType[VehcileType.Plane]); //Plane
(function (VehcileType) {
    VehcileType[VehcileType["Car"] = 2] = "Car";
    VehcileType[VehcileType["Plane"] = 3] = "Plane";
    VehcileType[VehcileType["Train"] = 4] = "Train";
})(VehcileType || (VehcileType = {}));
console.log(VehcileType);
function getVehicle(name) {
    if (name === 'ferrari') {
        return VehcileType.Car;
    }
    else {
        return undefined;
    }
}
console.log(getVehicle('ferrari')); //output   1
(function (VehcileType) {
    VehcileType[VehcileType["Car"] = 1] = "Car";
    VehcileType[VehcileType["Plane"] = 2] = "Plane";
    VehcileType[VehcileType["Train"] = 0] = "Train";
})(VehcileType || (VehcileType = {}));
console.log(VehcileType);
(function (VehcileType) {
    VehcileType[VehcileType["Car"] = 1] = "Car";
    VehcileType[VehcileType["Plane"] = 2] = "Plane";
    VehcileType[VehcileType["Train"] = 0] = "Train";
})(VehcileType || (VehcileType = {}));
console.log(VehcileType);
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//String Enums
(function (VehcileType) {
    VehcileType["Car"] = "Car";
    VehcileType["Plane"] = "Plane";
    VehcileType["Train"] = "Train";
})(VehcileType || (VehcileType = {}));
console.log(VehcileType.Car); //Car
console.log(VehcileType['Car']); //Car
(function (VehcileType) {
    VehcileType["Car"] = "C";
    VehcileType["Plane"] = "P";
    VehcileType["Train"] = "T";
})(VehcileType || (VehcileType = {}));
var vehicle = VehcileType.Plane;
printName(vehicle);
function printName(val) {
    switch (val) {
        case VehcileType.Car:
            console.log('It is a Car');
            break;
        case VehcileType.Plane:
            console.log('It is a Plane.');
            break;
        case VehcileType.Train:
            console.log('It is a Train.');
            break;
        default:
            console.log('No such vehicle');
            break;
    }
}
var value = VehcileType.Car;
if (value === VehcileType.Car || value === VehcileType.Train) {
    console.log('Please choose a plane');
    console.log(value);
}
(function (VehcileType) {
    VehcileType["Car"] = "C";
    VehcileType[VehcileType["Plane"] = 1] = "Plane";
    VehcileType[VehcileType["Train"] = 2] = "Train";
})(VehcileType || (VehcileType = {}));
console.log(VehcileType);
(function (VehcileType) {
    VehcileType["Car"] = "C";
    VehcileType[VehcileType["Plane"] = void 0] = "Plane";
    VehcileType[VehcileType["Train"] = void 0] = "Train";
})(VehcileType || (VehcileType = {}));
//Reverse Mapping of Enum
(function (VehcileType) {
    VehcileType[VehcileType["Car"] = 0] = "Car";
    VehcileType[VehcileType["Plane"] = 1] = "Plane";
    VehcileType[VehcileType["Train"] = 2] = "Train";
})(VehcileType || (VehcileType = {}));
console.log(VehcileType.Car); //0
console.log(VehcileType['Car']); //0
console.log(VehcileType[0]);
(function (VehcileType) {
    VehcileType["Car"] = "C";
    VehcileType["Plane"] = "P";
    VehcileType[VehcileType["Train"] = 10] = "Train";
})(VehcileType || (VehcileType = {}));
console.log(VehcileType.Plane); //P
console.log(VehcileType['Plane']); //P
console.log(VehcileType['P']); //undefined  //ERROR
console.log(VehcileType.Train); //10
console.log(VehcileType['Train']); //10
console.log(VehcileType[10]); //Train    //Works
console.log(VehcileType.Car); //0
console.log(VehcileType.Plane); //1
console.log(VehcileType['Car']); //0
console.log(VehcileType['Plane']); //1
console.log(VehcileType[0]); //ERROR
console.log(VehcileType[1]); //ERROR
//Type Checking
(function (VehcileType) {
    VehcileType[VehcileType["Car"] = 0] = "Car";
    VehcileType[VehcileType["Plane"] = 1] = "Plane";
    VehcileType[VehcileType["Train"] = 2] = "Train";
})(VehcileType || (VehcileType = {}));
function someFn(val) {
    console.log(val);
}
someFn(VehcileType.Car); //OK
someFn(100); //NO ERROR
someFn('Test'); //Error
someFn('C'); //Error
someFn('Car'); //Error
(function (VehcileType) {
    VehcileType["Car"] = "C";
    VehcileType["Plane"] = "P";
    VehcileType["Train"] = "T";
})(VehcileType || (VehcileType = {}));
function someFn(val) {
    console.log(val);
}
someFn(VehcileType.Car); //OK
someFn(100); //Error
someFn('Test'); //Error
someFn('C'); //Error
someFn('Car'); //Error
(function (VehcileType) {
    VehcileType["Car"] = "C";
    VehcileType["Plane"] = "P";
    VehcileType[VehcileType["Train"] = 10] = "Train";
})(VehcileType || (VehcileType = {}));
function someFn(val) {
    console.log(val);
}
someFn(VehcileType.Car); //OK
someFn(100); //NO ERROR
someFn('Test'); //Error
someFn('C'); //Error
someFn('Car'); //Error
