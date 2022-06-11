//let num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let isOddNumber = (x: number) => {
//   return x % 2;
// };

// let oddnumber: number[] = num.filter(isOddNumber);
// console.log('oddnumber:', oddnumber);

// let num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 11];

// let oddnumber: number[] = num.filter((x) => x % 2);

// console.log('oddnumber:', oddnumber);

// let sortet: number[] = num.sort((a, b) => a - b);
// console.log('sortet:', sortet);

//+,-,0

// setTimeout(() => {
//   console.log('Execute after 5 Sec');
// }, 5000);

setInterval(Timer, 5000);

function Timer() {
  const date = new Date();
  console.log(date.toLocaleDateString());
}
