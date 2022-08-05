"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["sunday"] = 1] = "sunday";
    Weekdays[Weekdays["monday"] = 2] = "monday";
    Weekdays[Weekdays["tuesday"] = 3] = "tuesday";
    Weekdays[Weekdays["wednesday"] = 4] = "wednesday";
    Weekdays[Weekdays["thursday"] = 5] = "thursday";
    Weekdays[Weekdays["friday"] = 6] = "friday";
    Weekdays[Weekdays["saturday"] = 7] = "saturday";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays.sunday);
console.log(Weekdays['sunday']);
console.log(Weekdays['1']);
var Btech;
(function (Btech) {
    Btech["CE"] = "CIVIL";
    Btech["ME"] = "MECHACAL";
    Btech["EC"] = "ELECTRAL";
    Btech["ECE"] = "ELETRONICS";
    Btech["CS"] = "COMPUTER SCIENCE";
})(Btech || (Btech = {}));
console.log(Btech.CE);
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
function IsItSummer(x) {
    let isSummer;
    switch (x) {
        case Month.Mar:
        case Month.Apr:
        case Month.May:
        case Month.Jun:
        case Month.Jul:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
console.log(IsItSummer('feb'));
var Vehical;
(function (Vehical) {
    Vehical[Vehical["Car"] = 500000] = "Car";
    Vehical[Vehical["Plane"] = 15000000000] = "Plane";
    Vehical[Vehical["Train"] = 78454555] = "Train";
})(Vehical || (Vehical = {}));
function getVehical(name) {
    if (name == 'Audi') {
        return Vehical.Car;
    }
    else if (name == 'Bmw') {
        return Vehical.Car;
    }
    else if (name == 'RAJDHANI') {
        return Vehical.Train;
    }
    else if (name == 'AirIndia') {
        return Vehical.Plane;
    }
    else {
        return undefined;
    }
}
console.log(getVehical('Audi'));
console.log(getVehical('RAJDHANI'));
console.log(getVehical('AirIndia'));
var VehicalType;
(function (VehicalType) {
    VehicalType[VehicalType["Car"] = 1] = "Car";
    VehicalType[VehicalType["Plane"] = 5250] = "Plane";
    VehicalType[VehicalType["Train"] = 5] = "Train";
    VehicalType[VehicalType["Jet"] = RandaomValue(10, 3600)] = "Jet";
})(VehicalType || (VehicalType = {}));
console.log(VehicalType.Car);
console.log(VehicalType.Train);
console.log(VehicalType.Plane);
console.log(VehicalType.Jet);
function RandaomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var Vehicaltype;
(function (Vehicaltype) {
    Vehicaltype["Car"] = "C";
    Vehicaltype["Plane"] = "P";
    Vehicaltype["Train"] = "T";
    Vehicaltype["Jet"] = "J";
})(Vehicaltype || (Vehicaltype = {}));
function TEST(arg) {
    return VehcileType['Plane'];
}
console.log(TEST(Vehicaltype.Car));
