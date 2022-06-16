export {};

function dosum(x: number, y: number): number {
  return x + y;
}

function avg(x: number, y: number, c: Function): number {
  return c(x, y) / 2;
}

let result = avg(8, 5, dosum);
console.log('result:', result);

//10,15

function abc(a: number, b: number) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
}

let arr: number[] = [1, 2, 8, 3, 7, 9, 4, 2];

arr.sort(abc);
console.log('arr:', arr);
