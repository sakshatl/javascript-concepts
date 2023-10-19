// === VARIABLES ========

/*
  - A variable is a "named storage" for data
  - A variable can be thought of a storage box with a uniquely named sticker on it
  - You can put any value in the box, you can also change it
  - In JavaScript we create variables using - "var", "let" or "const" keywords
*/

var a = 10;
let b = 20;
const PI = 3.14;

var x; // variable declaration
x = "hello world" // variable assignment


// === DATA TYPES =====

/*
  - A value in JavaScript is of a certain type
  - There are 8 basic types in JavaScript (7 primitives + 1 Reference)
    1. Number
    2. String
    3. Boolean
    4. BigInt
    5. Null
    6. Undefined
    7. Symbol
    8. Object (reference type)
  - We can put any type of value in a variable. Example a variable can store a string then it can also store a number
  - Programming languages that allow such flexibility are "dynamically typed"
*/

// === NUMBER ======

/*
  - Number type in JavaScript represents both integer and floating point values
  - Besides regular number there are "special numeric values": "Infinity", "-Infinity" and "NaN"
*/

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log("hello" / 1); // NaN (Not a Number)

/*
  - In JavaScript NaN represents Not a Number, it represents a value that is not a valid number.
  - Basically, Nan represents a computational error. It is result of an incorrect or undefined mathematical operation.
*/

console.log(NaN + 1); // NaN
console.log(NaN + "hello"); // NaN

// === STRING =====

/*
  - A string programming in a data type that is used to represent a sequence or an array of characters.
  - It is a series of characters letters, numbers, symbols and whitespaces
  - Characterictics of strings in JavaScript are:
    1. Character Sequence: a sequence of characters
    2. Immutable: strings are immutable, thier contents cannot be modified once they are created. If you want to change a string you create a new string.
    3. Enclosed in Quotes: strings are usually enclosed in single (' '), double (" "), or backticks (` `) quotes
    4. Operations: there are various in-built operations and functions to manipulate and work with strings in JavaScript.
*/

console.log("Hello World");
console.log(`The result of ${1 + 2} is 3`);

// === BOOLEAN =======

/*
  - The boolean type has only two values: true and false.
  - This type is commonly used to store yes/no values
*/

var isLoggedIn = false;
var isAboveEighteen = true;
var isGreater = 4 > 1;

// === NULL =======

/*
  - In JavaScript null represents nothing / empty.
  - It represents the absence of any value or no value at all.
*/

var age = null;

// === UNDEFINED ======

/*
  - It is a special placeholder value in JavaScript.
  - It represents a variable that has been declared but has not been assigned any value yet.
  - It is a primitive value and automatically assigned to a variable that are declared but not initialzed
  - A function which does not have a "return" statement, returns undefined.
*/

var foo;
console.log(foo); // undefined

function someFunc() {} // a simple function in javascript
console.log(someFunc()); // undefined;

// === NULL VS UNDEFINED ======

/*
  - "null" is a deliberate absence of value that you can assign to a variable.
  - "undefined" is the absence of value due to the variable not being assigned or not having a value yet
*/


// === OBJECTS & SYMBOLS ===== 

// TODO:

// === "typeof" OPERATOR ====

/*
  - "typeof" is a built-in operator in JavaScript that is used to determine the data type of a given expression or variable.
  - It returns a string that represents the type of the operand.
  - typeof is useful for runtime type checks, handling different behavior based on data types
    and ensuring that you're working with the expected types in your code.

  - SYNTAX: typeof operand;
  - "operand" can be a variable, a value or an expression whose type you want to determine
*/

typeof 42;        // returns "number"
typeof "hello";   // returns "string"
typeof true;      // returns "boolean"
typeof undefined; // returns "undefined"

let something;
if (typeof something === "undefined") {
  // Handle undefined variable
}

function myFunction() {
  // function body
}
typeof myFunction; // returns "function"

typeof {};          // returns "object"
typeof [];          // returns "object"
typeof new Date();  // returns "object"
typeof null;        // returns "object"





