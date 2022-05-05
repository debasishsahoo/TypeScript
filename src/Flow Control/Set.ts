let studentEntries = new Set();

//Add Values
studentEntries.add('Dinda');
studentEntries.add('Reshmi');
studentEntries.add('Anjani');
studentEntries.add('Abdul');
studentEntries.add('Sourav');

//Returns Set data
console.log(studentEntries);

//Check value is present or not
console.log(studentEntries.has('Sourav'));
console.log(studentEntries.has(10));

//It returns size of Set
console.log(studentEntries.size);

//Delete a value from set
console.log(studentEntries.delete('Anjani'));

//Clear whole Set
studentEntries.clear();

//Returns Set data after clear method.
console.log(studentEntries);

//Chaining of add() method is allowed in TypeScript
studentEntries.add('Signik').add('Rup').add('Arnab').add('Kunal');

//Returns Set data
console.log('The List of Set values:');
console.log(studentEntries);

let diceEntries = new Set();

diceEntries.add(1).add(2).add(3).add(4).add(5).add(6);

//Iterate over set entries
console.log('Dice Entries are:');
for (let diceNumber of diceEntries) {
  console.log(diceNumber);
}

// Iterate set entries with forEach
console.log('Dice Entries with forEach are:');
diceEntries.forEach(function (value) {
  console.log(value);
});
