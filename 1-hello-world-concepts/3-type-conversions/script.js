// === STRING CONVERSION ====
// console.log("=== STRING CONVERSION ====")

var value = true;
console.log(typeof value); // boolean

value = String(value);
console.log(value); // "true"
console.log(typeof value); // string

// === NUMBER CONVERSION ====

/*
  Conversion Rules:
  - undefined becomes NaN
  - null becomes 0
  - true/false become 1/0
  - empty string becomes 0
  - string with a numeric value becomes the number, otheriwse it becomes NaN
*/

var str = "123";
console.log(typeof str); // string

var num = Number(str);
console.log(typeof num); // number

console.log(Number("Hello World")); // NaN
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// === BOOLEAN CONVERSION =======

/*
  Conversion Rule:
  - Values that are intuitevly empty ( 0, "", null undefined, false and NaN) return false
  - Anything other than these values return true
*/

console.log(Boolean("hello")); // true
console.log(Boolean("")); // false


console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true




