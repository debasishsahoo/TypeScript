function add(a: string, b: string): string;

function add(a: number, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}

add('Hello ', 'Steve'); // returns "Hello Steve"
add(10, 20); // returns 30

function display(a: string, b: string): void {
  //Compiler Error: Duplicate function implementation
  console.log(a + b);
}

function display(a: number): void {
  //Compiler Error: Duplicate function implementation
  console.log(a);
}
