export {};

let x = function () {};

let y = () => {};
y();

let z = (x: number, y: number): void => console.log('Sum is', x + y);

z(4, 5);


