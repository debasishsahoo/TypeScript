export {};

//normal function
function abc(a: number) {
  console.log(a + 100);
}
abc(2);

//anonymous function
let x = function (a: number) {
  console.log(a + 100);
};

x(2);

//Arrow function
let y = (a: number) => {
  console.log(a + 100);
};

y(2);

//IIFE function
((a: number) => {
  console.log(a + 100);
})(2);
