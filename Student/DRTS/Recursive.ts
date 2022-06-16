export {};
function Pow(a: number, b: number): number {
  if (b == 1) {
    return a;
  } else {
    return a * Pow(a, b - 1);
  }
}

console.log(Pow(2, 8));

//(2*(2,3-1))
//(2*2*(2,2-1))
//2*2*2

function fact(a: number): number {
  let res = 1;
  for (let i = a; i > 1; i--) {
    res *= i;
  }
  return res;
}

console.log(fact(5));

//res=5
//5*4*3*2*1
