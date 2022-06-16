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
