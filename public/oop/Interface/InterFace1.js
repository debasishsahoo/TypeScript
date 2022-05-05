"use strict";
var OperatingSystem = function (type) {
    console.log('Android ' + type.name + ' has ' + type.language + ' language.');
};
var Oreo = { name: 'O', language: 'Java' };
OperatingSystem(Oreo);
