"use strict";
var StringUtility;
(function (StringUtility) {
    function ToCaptial(str) {
        return str.toUpperCase();
    }
    function SubString(str, from, length = 0) {
        return str.substr(from, length);
    }
})(StringUtility || (StringUtility = {}));
