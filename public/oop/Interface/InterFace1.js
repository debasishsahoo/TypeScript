"use strict";
let OperatingSystem = (type) => {
    console.log('Android ' + type.name + ' has ' + type.language + ' language.');
};
let Oreo = { name: 'O', language: 'Java' };
OperatingSystem(Oreo);
