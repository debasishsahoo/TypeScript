let num1: number = 14;
let num2: number = 0x37cf;
let num3: number = 0o337;
let num4: number = 0b111001;
let bigNumber: bigint = 9007199254740991n;

let NumberValue: number = 0;
let numberObj = new Number(1500);
//NumberValue = numberObj;

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


//number settings code
//MAX_SAFE_INTEGER & MIN_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);

//isSafeInteger

console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));

//MAX_VALUE & MIN_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_VALUE + 100 == Number.MAX_VALUE);

//Number.EPSILON
console.log(Number.EPSILON);

function numberEquals(x: number, y: number) {
  return Math.abs(x - y) < Number.EPSILON;
}

console.log(numberEquals(0.1 + 0.2, 0.3));

//Infinity
console.log(3 / 0);
console.log(typeof Infinity);

console.log(Math.pow(10, 1000));
console.log(Math.log(0));
console.log(Number.MAX_VALUE + 10 ** 1000);

console.log(Infinity + 1);
console.log(Infinity + Infinity);
console.log(Infinity * 3);
console.log(Infinity / 3);

console.log(1 / Infinity);

console.log(Infinity * 0);
console.log(Infinity / Infinity);
console.log(Infinity - Infinity);

//POSITIVE_INFINITY & NEGATIVE_INFINITY
console.log(3 / 0);
console.log(-3 / 0);

console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

console.log(Infinity > 1000);
console.log(Infinity == 1000);
console.log(Infinity < 1000);

console.log(-Infinity > 1000);
console.log(-Infinity == 1000);
console.log(-Infinity < 1000);

console.log(Infinity > -Infinity);
console.log(Infinity == Infinity);

//isFinite
console.log(Number.isFinite(Number.POSITIVE_INFINITY));
console.log(Number.isFinite(100));
console.log(Number.isFinite('100'));
