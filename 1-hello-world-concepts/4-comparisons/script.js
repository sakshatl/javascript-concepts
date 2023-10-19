/*
  - All comparisons return a boolean value (true / false)
*/

console.log(2 > 1); // true
console.log(2 == 1); // false
console.log(2 != 1); // true

// A comparison result can be stored in a variable
var result = 5 > 4;
console.log(result); // true

// === STRING COMPARISON ====

/*
  - To see whether a string is greater than another JavaScript uses so call "dictionary" or "lexicographical" order
  - Case matters: "A" is not equal to "a". Lowercase "a" is greather because lowercase characters have greater index in internal encoding table that JavaScript uses (unicode)
*/

console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // true
console.log('apple' > 'Apple'); // true

// === COMPARISON OF DIFFERENT TYPES ==========

/*
  - When comparing values of different types, JavaScript converts the values to numbers
*/

console.log('2' >  1); // true, '2' becomes 2
console.log('01' == 1); // true, '01' becomes 1

console.log(true == 1); // true
console.log(false == 0); // true

// === STRICT EQUALITY ==========

/*
  - In a regular equality check we cannot differentiate 0 from false, 0 == false will return true
  - It happens because operands are converted to numbers by equality operator, Number(false) will return 0
  - Also, Number('') will return 0, so '' == false will return true
*/

console.log(0 == false); // true
console.log('' === false); // true

/*
  - A strict equality operator === checks the equality without type conversion
  - if a and b are of different types, then a === b immediately returns false without an attempt to convert them
*/

console.log(0 === false); // false
console.log('' === false); // false

// === COMPARISONS WITH NULL AND UNDEFINED =============

// non-strict check
console.log(null == undefined); // true

// strict check
console.log(null === undefined); // false

// === STRANGE RESULTS =====

console.log(null > 0); // (1) false
console.log(null == 0); // (2) false
console.log(null >= 0); //(3) true

/* 
  - the above result states that null is not greater than 0, not it is equal to zero
  - but null greater than and equals to zero

  - this happens because equality and comparison check for null and undefined work in a different way.
  - the equality check without any conversions equal each other an nothing else
  - comparisons convert null to a number
*/

// The value undefined shouldn’t be compared to other values
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false








