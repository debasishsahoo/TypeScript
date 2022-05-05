"use strict";
var map = new Map();
map.set('1', 'abhishek');
map.set(1, 'www.Google.com');
map.set(true, 'bool1');
map.set('2', 'ajay');
console.log('Value1= ' + map.get(1));
console.log('Value2= ' + map.get('1'));
console.log('Key is Present= ' + map.has(3));
console.log('Size= ' + map.size);
console.log('Delete value= ' + map.delete(1));
console.log('New Size= ' + map.size);
var ageMapping = new Map();
ageMapping.set('Abdul', 23);
ageMapping.set('Reshmi', 25);
ageMapping.set('Anjani', 23);
ageMapping.set('Dinda', 21);
//Iterate over map keys
for (var _i = 0, _a = ageMapping.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log('Map Keys= ' + key);
}
//Iterate over map values
for (var _b = 0, _c = ageMapping.values(); _b < _c.length; _b++) {
    var value_1 = _c[_b];
    console.log('Map Values= ' + value_1);
}
console.log('The Map Enteries are: ');
//Iterate over map entries
for (var _d = 0, _e = ageMapping.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry[0], entry[1]);
}
//Methods =>
// 1.map.set(key, value)
// 2.map.get(key)
// 3.map.has(key)
// 4.map.delete(key)
// 5.map.size()
// 6.map.clear()
