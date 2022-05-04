"use strict";
//The operator precedence along with their associativity determines how Typescript evaluates an expression when there are multiple Typescript Operators present in the expression. Each Typescript operators have certain precedence. The Typescript evaluates the operators with higher precedence first. If a group of operators has the same Precedence, then it evaluates them either left to right or right to left, depending on the operator’s associativity. The table end of the article. has a list of all operators, with their precedence along with associativity.
Object.defineProperty(exports, "__esModule", { value: true });
console.log(100 + 100 * 20);
console.log((100 + 100) * 20);
let y = 5;
let x = (y = 10);
//Parenthesis (grouping) and short-circuiting
//The Parenthesis or grouping operator has the highest precedence. However, even they might not be evaluated, when they are part of the expression involving short-circuited Operators.
//The bitwise operators like || & && stops the evaluation, if they find the match This is known as a short-circuiting. For Example in the code below does not invoke alert("Hello") even with a parenthesis.
//Similarly in expression, a || (b * c) b*c never invoked if a is truthy.
console.log(true || alert('Hello'));
//alert is never evaluated
let a = 10;
let b = 5;
let c = 5;
console.log(a || b * c); //10    b*c never invoked
//Operator Precedence & Associativity Table
