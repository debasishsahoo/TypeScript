let num1: number = 14;
let num2: number = 0x37cf; //hex
let num3: number = 0o337; //oct
let num4: number = 0b111001; //bin
let bigNumber: bigint = 9007199254740991n;

let NumberValue: number = 0;




//x='2+5+9+10-45'


//A new Number Objaect Is created
let numberObj = new Number(1500);
console.log(typeof numberObj);

let numberObj2 = new Number('1500');
console.log(typeof numberObj2);

let numberObj3 = new Number('1500');
console.log(numberObj3)


console.log('num1:', num1);
console.log('num2:', num2);
console.log('num3:', num3);
console.log('num4:', num4);
console.log('bigNumber:', bigNumber);

//toExponential()

let myNumber: number = 123456;

console.log(myNumber.toExponential());
console.log(myNumber.toExponential(1));
console.log(myNumber.toExponential(2));
console.log(myNumber.toExponential(3));
console.log(myNumber.toExponential(4));

//toFixed()*

myNumber = 10.8788;

console.log(myNumber.toFixed());
console.log(myNumber.toFixed(1));
console.log(myNumber.toFixed(2));
console.log(myNumber.toFixed(3));
console.log(myNumber.toFixed(4));
console.log(myNumber.toFixed(5));

//toLocaleString()

myNumber = 10667.987;

console.log(myNumber.toLocaleString());
console.log(myNumber.toLocaleString('bn-IN'));
console.log(myNumber.toLocaleString('en-IN'));
console.log(myNumber.toLocaleString('hi-IN'));
console.log(myNumber.toLocaleString('ta-IN'));
console.log(myNumber.toLocaleString('de-DE'));
console.log(myNumber.toLocaleString('ar-EG'));
console.log(myNumber.toLocaleString('ko-KR'));
console.log(myNumber.toLocaleString('ja-JP-u-ca-japanese'));
console.log(myNumber.toLocaleString('en-US'));

//toPrecision()

myNumber = 10.5679;
console.log(myNumber.toPrecision(1));
console.log(myNumber.toPrecision(2));
console.log(myNumber.toPrecision(3));
console.log(myNumber.toPrecision(4));
console.log(myNumber.toPrecision(5));
console.log(myNumber.toPrecision(6));
console.log(myNumber.toPrecision(7));
console.log(myNumber.toPrecision(8));

//toString()

myNumber = 123;
console.log(myNumber.toString());
console.log(myNumber.toString(2));
console.log(myNumber.toString(3));
console.log(myNumber.toString(4));
console.log(myNumber.toString(5));

//valueOf()
console.log(myNumber);
console.log(myNumber.valueOf());

let x1: number = 0x4;
console.log('x1:', x1);
console.log(typeof x1);
let x2: string = '45';
console.log('x2:', x2);
console.log(typeof x2);

//The NaN stands for not a number. It is the result of numerical operations, where the result is not a number.

console.log(Number('deb'));

console.log(0 / 0);

////////////////////////////////////////
//The max integer that can be stored in 52 bits is 9007199254740991. It is represented by MAX_SAFE_INTEGER & the minimum value is -9007199254740991 and is represented by MIN_SAFE_INTEGER
////////////////////////////////////////

//number settings code
//MAX_SAFE_INTEGER & MIN_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//Any number above this number will result in a loss of accuracy. For Example, adding 1 & 2 to the MAX_SAFE_INTEGER results in the same value

console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);

//Number.isSafeInteger method to check whether the number is safe.

//isSafeInteger

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));

//The largest number possible to represent using the number data type is 1.7976931348623157e+308 and it is represented by Number.MAX_VALUE. The lowest number is Number.MIN_VALUE.

//MAX_VALUE & MIN_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_VALUE + 100 == Number.MAX_VALUE);

//Number.EPSILON
//Typescript Number.EPSILON property. It represents the difference between 1 and the smallest floating-point number greater than 1. It exists because not all decimal numbers can be represented accurately and exactly in the binary system.

//0.1 when converted from decimal to binary results in 0.0001100110011001101. Now convert it back from binary to decimal will result in 0.1000003814697265625

//The above case is similar to how 1/3 ( 0.33333) cannot be represented as accurately in decimal.
console.log(Number.EPSILON);

console.log(0.1 + 0.2);
console.log(0.2 + 0.4);
console.log(0.2 + 0.7);

console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2 === 0.30000000000000004);

//abc() is abslute function
function numberEquals(x: number, y: number): boolean {
  console.log(Math.abs(x - y));
  return Math.abs(x - y) < Number.EPSILON;             //10   ==   10.06
}
//0.30000000000000004-0.3=0.00000000000000004
console.log(numberEquals(0.1 + 0.2, 0.3));

//Infinity can result in many ways. For Example, dividing any non zero number by zero results in infinity. The Typeof Infinity is a number

//Infinity
console.log(3 / 0);
console.log(typeof Infinity);

//Any operations that result in a large number. is trated as Infinity

console.log(Math.pow(10, 1000));

console.log(Math.log(0));
console.log(Number.MAX_VALUE + 10 ** 1000);

//Dividing, Multiplying, and Adding to infinity is still infinit
console.log(Infinity + 1);
console.log(Infinity + Infinity);
console.log(Infinity * 3);
console.log(Infinity / 3);
//But dividing a number by Infinity is zero.
console.log(1 / Infinity);
// infinity results in NaN.
console.log(Infinity * 0);
console.log(Infinity / Infinity);
console.log(Infinity - Infinity);

//POSITIVE_INFINITY & NEGATIVE_INFINITY
//Infinity can be either positive or negative.
console.log(3 / 0);
console.log(-3 / 0);
//POSITIVE_INFINITY & NEGATIVE_INFINITY are static properties of Number object. We can access it using the Number.POSITIVE_INFINITY and Number.NEGATIVE_INFINITY.
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
//Comparisons
console.log(Infinity > 1000);
console.log(Infinity == 1000);
console.log(Infinity < 1000);

console.log(-Infinity > 1000);
console.log(-Infinity == 1000);
console.log(-Infinity < 1000);

console.log(Infinity > -Infinity);
console.log(Infinity == Infinity);

//isFinite
//Number.isFinite method to verify whether the number is finite.
console.log(Number.isFinite(Number.POSITIVE_INFINITY));
console.log(Number.isFinite(100));
console.log(Number.isFinite('100'));
