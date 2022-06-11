let pow = (a: number, b: number): number => {
  if (b == 1) {
    return a;
  } else {
    return a * pow(a, b - 1);
  }
};

console.log(pow(2, 3));

let fact = (x: number): number => {
  let res: number = 1;
  for (let i = x; i > 1; i--) {
    res *= i;
  }
  return res;
};

console.log(fact(3));
