export {};
function details<T>(x: T): T {
  return x;
}
let output1 = details<string>('debasish');
let output2 = details<number>(100);

console.log(output1);
console.log(output2);
