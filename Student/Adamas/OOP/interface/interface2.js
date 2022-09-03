"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let OperatingSystem = (DataType) => {
    console.log(`Android ${DataType.name} has ${DataType.language}`);
};
let OREO = { name: 'O', language: 'KOTLIN' };
OperatingSystem({
    name: 'MARSHMELLO',
    language: 'FLUTTER',
});
OperatingSystem(OREO);
