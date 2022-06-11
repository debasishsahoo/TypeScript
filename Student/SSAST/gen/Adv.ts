export {};
function getArray(item: any[]): any[] {
  return new Array().concat(item);
}

let MyNumArr = getArray([100, 200, 300]);

let MyStrArr = getArray(['Hello', 'World']);

console.log('MyNumArr:', MyNumArr);
console.log('MyStrArr:', MyStrArr);

MyNumArr.push(400);
MyStrArr.push('Sourav');

MyNumArr.push('Sourav');
MyStrArr.push(400);

console.log('MyNumArr:', MyNumArr);
console.log('MyStrArr:', MyStrArr);



function getArray1<T>(item: T[]): T[] {
  return new Array<T>().concat(item);
}
let MyNumArr1 = getArray1<number>([100, 200, 300]);
let MyStrArr1 = getArray1<string>(['Hello', 'World']);
console.log('MyNumArr:', MyNumArr1);
console.log('MyStrArr:', MyStrArr1);

MyNumArr1.push(400);
MyStrArr1.push('Sourav');

MyNumArr1.push('Sourav');
myStrArr1.push(400);

console.log('MyNumArr:', MyNumArr1);
console.log('MyStrArr:', MyStrArr1);
