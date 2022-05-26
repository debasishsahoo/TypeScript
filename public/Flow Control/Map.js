"use strict";
let map = new Map();
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
let ageMapping = new Map();
ageMapping.set('Abdul', 23);
ageMapping.set('Reshmi', 25);
ageMapping.set('Anjani', 23);
ageMapping.set('Dinda', 21);
//Iterate over map keys
for (let key of ageMapping.keys()) {
    console.log('Map Keys= ' + key);
}
//Iterate over map values
for (let value of ageMapping.values()) {
    console.log('Map Values= ' + value);
}
console.log('The Map Enteries are: ');
//Iterate over map entries
for (let entry of ageMapping.entries()) {
    console.log(entry[0], entry[1]);
}
//Methods =>
// 1.map.set(key, value)
// 2.map.get(key)
// 3.map.has(key)
// 4.map.delete(key)
// 5.map.size()
// 6.map.clear()
