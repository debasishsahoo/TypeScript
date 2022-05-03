//Type Assertion allows us to override the compiler determined type in our code. It is something similar to type casting in other languages. except that it does not restructure or modify the type in any way. The Type Assertion in TypeScript is a compile-time feature.
//Using Type Assertion
export {};
interface Person {
  firstName: string;
  lastName: string;
}

let person1 = getPerson();

person1.firstName = ''; //Property 'firstName' does not exist on type '{}'.
person1.lastName = ''; //Property 'lastName' does not exist on type '{}'

//Some third Party Library or some old Javascript Code
function getPerson() {
  return {};
}

//as syntax
let person2 = getPerson() as Person;
person2.firstName = ''; //OK
person2.lastName = ''; //OK

let person3 = getPerson();
person3.firstName = '';
person3.lastName = '';

//angle-bracket syntax
let person4 = <Person>getPerson();

person4.firstName = ''; //OK
person4.lastName = ''; //OK
