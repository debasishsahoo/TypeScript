//An assignment operator requires two operands. The value of the right operand is assigned to the left operand. The sign = denotes the simple assignment operator. The typescript also has several compound assignment operators, which is actually shorthand for other operators. List of all such operators are listed below

//List of Assignment operators
// Name	                        Syntax	Meaning
// Assignment	                    x = y	x = y
// Addition assignment	            x += y	x =x+ y
// Subtraction assignment	        x -= y	x = x - y
// Multiplication assignment	    x *= y	x = x * y
// Division assignment	            x /= y	x = x / y
// Remainder assignment	            x %= y	x = x % y
// Exponentiation assignment	    x **= y	x = x ** y
// Left shift assignment	        x <<= y	x = x << y
// Right shift assignment	        x >>= y	x = x >> y
// Unsigned right shift assignment	x >>>= y	x = x >>> y
// Bitwise AND assignment	        x &= y	x = x & y
// Bitwise XOR assignment	        x ^= y	x = x ^ y
// Bitwise OR assignment	        x |= y	x = x | y
// Logical AND assignment	        x &&= y	x && (x = y)
// Logical OR assignment	        x ||= y	x || (x = y)
// Logical nullish assignment	    x ??= y	x ?? (x = y)

export {};
//Simple Assignement Operator
let x: number = 25;

let y: number = 25 * 100;

let z: number = x + y;

//Compound Assignment Operators
x = 25;
x += 25; //50;
