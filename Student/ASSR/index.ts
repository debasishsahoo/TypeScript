// let a: number = 4;
// let b: string = 'debasish is the Teacher ';
// let c: boolean = true;
// let d: bigint = 90071992547400991n; //more then 2^53
// let e: string = 'a';

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);

//toExponential()
let a: number = 123456;

console.log(a.toExponential());
console.log(a.toExponential(1));
console.log(a.toExponential(2));
console.log(a.toExponential(3));
console.log(a.toExponential(4));
console.log(a.toExponential(5));
console.log(a.toExponential(6));
console.log(a.toExponential(7));

a = 12.355678;
let b: string = 'debasish';

console.log(a.toFixed());
console.log(a.toFixed(1));
console.log(a.toFixed(2));
console.log(a.toFixed(3));
console.log(a.toFixed(4));
console.log(a.toFixed(5));
console.log(a.toFixed(6));
console.log(a.toFixed(7));

console.log(a.toLocaleString('bn-in'));


console.log(a.toLocaleString('aR-EG'));
