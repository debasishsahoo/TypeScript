function Greet(greeting: string, ...names: string[]) {
  return greeting + ' ' + names.join(', ') + '!';
}

Greet('Hello', 'Steve', 'Bill'); // returns "Hello Steve, Bill!"

Greet('Hello'); // returns "Hello !"

let Greet = (greeting: string, ...names: string[]) => {
  return greeting + ' ' + names.join(', ') + '!';
};

Greet('Hello', 'Steve', 'Bill'); // returns "Hello Steve, Bill!"

Greet('Hello'); // returns "Hello !"

function Greet(...names: string[], greeting: string) {
  // Compiler Error
  return greeting + ' ' + names.join(', ') + '!';
}
