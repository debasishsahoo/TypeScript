export {};

//normal function
function fun1(): void {
  console.log('this is fun');
}

fun1();

//anomies function
let x = function (): void {
  console.log('this is x');
};

x();

let y = (): void => {
  console.log('this is y');
};
y();

let z = (x: number, y: number): void => {
  console.log(x + y);
};
z(5,8);
