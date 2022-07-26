export {};

//Any means Any Kind of data type
let something: any = 'Hello World!';
something = 23;
something = true;






console.log('something:', something);

//Any type Array
let arr: any[] = ['Debasish', 212, true];
arr.push('Sahoo');
console.log(arr);





let anyVar: any;
anyVar = '100.5175';
anyVar = {};//blank object
anyVar = 100.51575;
console.log(anyVar.toFixed(2));
