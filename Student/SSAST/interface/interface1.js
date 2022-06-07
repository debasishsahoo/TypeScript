"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let OSSYSTEM = (type) => {
    console.log(`Anroid:${type.name} has Language:${type.language} and Version:${type.version}`);
};
let OREO = { name: 'O', language: 'KOTLIN', version: 8 };
OSSYSTEM(OREO);
