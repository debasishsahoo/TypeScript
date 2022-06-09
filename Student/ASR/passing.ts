export {};

function dosum(x: number, y: number): number {
  return x + y;
}

function avg(a: number, b: number, c: Function): number {
  return c(a, b) / 2;
}

let result = avg(8, 5, dosum);

console.log('result:', result);

////x y =>x>y +1 ,x<y -1,x==y 0
function CompareBy(propname: any): any {
  return function (a: any, b: any): number {
    let x: any = a[propname];
    let y: any = b[propname];

    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      return 0;
    }
  };
}

let product = [
  { name: 'Iphone', price: 900 },
  { name: 'Samsung', price: 1200 },
  { name: 'Sony', price: 700 },
];

console.log('Product Sort By name:');
product.sort(CompareBy('name'));
console.log('product:', product);

console.log('Product Sort By Price:');
product.sort(CompareBy('price'));
console.log('product:', product);
