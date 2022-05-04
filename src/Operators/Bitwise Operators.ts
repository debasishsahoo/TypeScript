//Bitwise Operators
//Bitwise operators operate on Binary numbers i.e. zeros & ones. Hence it is important to understand how they are stored to understand the Bitwise operators

//A binary number is a number expressed in the base-2 numeral system or binary numeral system. It uses the 0 (zero) and 1 (one) to represent the numbers.
export {};
console.log(Number(20).toString(2)); //10100

//Bitwise AND &
/* a	b	a & b
   0	0	0
   1	0	0
   0	1	0
   1	1	1   */

console.log(9 & 7); //1
console.log(-9 & -7); //-15
console.log(-9 & 7); //7
console.log(6 & 7); //6
console.log(37 & 23); //5

//Bitwise OR |
/* 
a	b	a | b
0	0	0
1	0	1
0	1	1
1	1	1
 */

console.log(9 | 7); //15
console.log(-9 | -7); //-1
console.log(-9 | 7); //-9
console.log(6 | 7); //7
console.log(37 | 23); //55

//Bitwise XOR ^
/* 
a	b	a^ b
0	0	0
1	0	1
0	1	1
1	1	0
 */

console.log(9 ^ 7); //14
console.log(-9 ^ -7); //14
console.log(-9 ^ 7); //-16
console.log(6 ^ 7); //1
console.log(37 ^ 23); //50

//Bitwise NOT ~
console.log(~5);
console.log(~6);
console.log(~-6);
console.log(~10);

//Left Shift <<
console.log(9 << 1);
console.log(9 << 2);
//Right shift >>
console.log(9 >> 1); //4
console.log(9 >> 2); //2
console.log(-9 >> 1); //-5
console.log(-9 >> 2); //-3
//Unsigned right shift >>>
console.log(9 >>> 1); //4
console.log(9 >>> 2); //2
console.log(-9 >>> 1); //2147483643
console.log(-9 >>> 2); //1073741821

//Bitwise assignment operators
let y: number = 9;
y &= 7;
console.log(y); //1

//is same as
y = 9;
y = y & 7;
console.log(y); //1

//List of Bitwise assignment Operators

// &= (bitwise AND assignment)
// |= (bitwise OR assignment)
// ^= (bitwise XOR assignment)
// <<= (bitwise left shift and assignment)
// >>= (bitwise right shift and assignment)
// >>>= (bitwise unsigned right shift and assignment)

// Operator	Meaning
// x &= y	   x =x & y
// x |=y	   x =x | y
// x ^=y	   x =x ^ y
// x <<=y	   x =x << y
// x >>=y	   x =x >> y
// x >>>=y    x =x >>> y
