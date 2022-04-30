let a = null;
console.log(a);
console.log(typeof a);

function person1(name: string, dateOfMarriage: Date | null) {
  return {
    name: name,
    dateOfMarriage: dateOfMarriage,
  };
}
console.log(person1('Debasish Sahoo', null));

let nullVar1: null;
console.log(nullVar1);

nullVar1 = null;
console.log(nullVar1);

//Allowed
nullVar1 = null;
nullVar1 = undefined; //only if strictNullCheck is disabled

//Not Allowed
nullVar1 = 10; //type '10' is not assignable to type 'null'
nullVar1 = {};

let anyVar: any;
let nullVar: null;

anyVar = null; //ok
nullVar = null; //ok

let undefVar: undefined;
let numVar: number;

//NOT ok

undefVar = null; //Type 'null' is not assignable to type 'undefined'.
numVar = null; //Type 'null' is not assignable to type 'number'.

let a4 = null;
console.log(typeof a4);

let nVar: number | null | undefined;
nVar = null;
console.log(nVar); //null

console.log(typeof nVar); //object

console.log(nVar == null); //true
console.log(nVar === null); //true

console.log(null == undefined); //true

let a5; //a has the default value of undefined
console.log(a5 == null); //true because both null & undefined is treated as no value

console.log(a5 === null);

let a6 = null;

if (a6) {
  console.log('true'); //this code does not execute
}

if (!a6) {
  console.log('false'); //false
}

let a7 = null;

//loose equality check

console.log(a7 == false); //false
console.log(a7 == true); //false

//Strict equality check

console.log(a7 === false); //false
console.log(a7 === true);
