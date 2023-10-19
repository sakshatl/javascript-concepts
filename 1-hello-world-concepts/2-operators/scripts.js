// === MATHS ======

/*
  - The follwoing operations are supported in JavaScript:
    - Addition (+)
    - Subtraction (-)
    - Multiplication (*)
    - Division (/)
    - Remainer (%) 
    - Exponentiation (**)
*/

/*
  - Operand: is what operators are applied to. Example 5 * 2, 5 and 32 are operands
  - Unary: Operation is unary if it has a single operand
  - Binary: Operation is binary if it has two operands
*/

var x = 1;
x = -x; // unary negation

// === NUMBER CONVERSION, UNARY+ =======

/*
  - If the operad is not a number, the unary plus converts it to a number.
  - It does the same thing as Number(...)
  - The need of conversion string to number comes very often JavaScript
*/

console.log(+x); // 1 (no oeffect)

console.log(+true); // 1
console.log(+""); // 0
console.log(+"3"); // 3

var apples = "2";
var oranges = "3";

// Binary plus
console.log(apples + oranges); // "23"
// Unary plus
console.log(+apples + +oranges); // 5

/*
  - The abundance of pluses may seem strange. 
  - From a programmer’s standpoint, there’s nothing special: 
    - unary pluses are applied first they convert strings to numbers, 
    - and then the binary plus sums them up.
*/

// === ORDER PRECEDENCE =====

/*
  - Why are unary pluses applied to values before the binary ones?
    - that’s because of their higher precedence.
  
  - If an expression has more than one operator,
  - The execution order is defined by their precedence, 
  - In other words, the default priority order of operators.

  PRECEDENCE
  - unary plus
  - unary negation
  - exponentation
  - multiplication
  - division
  - addition
  - subraction
  - assignment
*/

