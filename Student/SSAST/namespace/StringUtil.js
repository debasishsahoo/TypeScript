"use strict";
var StringUtility;
(function (StringUtility) {
    function ToX(str) {
        return str.toUpperCase();
    }
    StringUtility.ToX = ToX;
    function ToY(str) {
        return str.toLowerCase();
    }
    StringUtility.ToY = ToY;
    function ToZ(str, from, length) {
        return str.substr(from, length);
    }
    StringUtility.ToZ = ToZ;
})(StringUtility || (StringUtility = {}));
