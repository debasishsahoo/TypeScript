"use strict";
// let val1: number = 20;
// let val2: number = 10;
// let operation: string = '-';
Object.defineProperty(exports, "__esModule", { value: true });
var VehcileType;
(function (VehcileType) {
    VehcileType[VehcileType["Car"] = 0] = "Car";
    VehcileType[VehcileType["Plane"] = 1] = "Plane";
    VehcileType[VehcileType["Train"] = 2] = "Train";
})(VehcileType || (VehcileType = {}));
let num = VehcileType.Plane; //  ==    ===
console.log('num:', num);
switch (+num) {
    case VehcileType.Car:
        console.log('Car');
        break;
    case VehcileType.Plane:
        console.log('Plane');
        break;
    case VehcileType.Train:
        console.log('Train');
        break;
    default:
        break;
}
