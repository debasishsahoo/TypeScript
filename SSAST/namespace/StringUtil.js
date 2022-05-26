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
})(StringUtility || (StringUtility = {}));
