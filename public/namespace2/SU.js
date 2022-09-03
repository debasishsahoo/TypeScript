"use strict";
var SU;
(function (SU) {
    function ToCapital(str) {
        return str.toUpperCase();
    }
    function ToSmall(str) {
        return str.toLowerCase();
    }
    function SubString(str, from, length) {
        return str.substr(from, length);
    }
    function CharAT(str, pos) {
        return str.charAt(pos);
    }
    function Concat(str1, str2) {
        return str1.concat(str2);
    }
})(SU || (SU = {}));
