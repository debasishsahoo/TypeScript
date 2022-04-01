//Diffent Type        |Built-In
//Static ------------|
//Generic            |User-Defined
//Decorators

//Static Type

//1.Built-In
//Number Type  ----> 1,4.5,100000000000000,4.2f,0.01541
//String Type  ----> "Dev",'A',"145"
//Boolean Type ----> 1,0,true,false
//Void Type    ----> YES Memory Allocations
//Null Type    ----> NO Memory Allocations
//Undefined
//Any

//2.User-Defined
//User-Defined Type
//Array Type    ---->
//Class Type    ---->
//Touple Type   ---->
//Enum  Type    ---->
//Interface Type ---->
//Function  Type ----->
//Object Type    ----->

//Generic
function Compare<T>(a: T, b: T): boolean {
  //<T> denotes As Type
  return a == b;
}
let output1 = Compare<string>('Deb', 'Sahoo');
let output2 = Compare<number>(5, 6);
let output3 = Compare<number>(5.5, 6.8);
let output4 = Compare<any>(5.0, 5);
let output5 = Compare<any>('5.0', 5);

//Decorators

function f() {
  console.log('f():Evaluated');
  return function (
    target,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('f():Called');
  };
}

class C {
  @f()
  method() {}
}
