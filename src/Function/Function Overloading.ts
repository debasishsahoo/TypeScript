export {};
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: any, b: any, c?: any): any {
  return a + b;
}

add('Hello ', 'Steve'); // returns "Hello Steve"
add(10, 20); // returns 30

function display(a: string, b: string): string {
  //Compiler Error: Duplicate function implementation
  //console.log(a + b);
  return a + b;
}

function display(a: number, b: number): number {
  //Compiler Error: Duplicate function implementation
  //console.log(a);
  return a + b;
}

display('deb', 'sahoo');
display(5, 9);

function grettings(person: string): string {
  return `Hello, ${person}`;
}

let xh1: string = grettings('World');
console.log('xh1:', xh1);

function grettings(
  person: string | number | boolean
): string | number | boolean {
  return `Hello, ${person}`;
}

let xh1: string = grettings('World');
console.log('xh1:', xh1);

function greet(person: string): string;
function greet(person: string[]): string[];
function greet(person: number): number;

function greet(person: string | string[] | number): string | string[] | number {
  if (typeof person === 'string') {
    return `Hello ${person}`;
  } else if (Array.isArray(person)) {
    return person.map((name) => `Hello ${person}`);
  } else if (typeof person === 'number') {
    return person;
  }
  throw new Error(`Unable to Greet`);
}
