// Create an object 'a' using object literal syntax
let a = {
  name: 'Minato',
  age: 30,
  greet: function() {
    console.log('RASENGAN!!!');
  }
};

// Create an object 'b' with prototype of 'a'
let b = Object.create(a);
b['name'] = "Naruto";


// === DRIVER CODE ===========

// 1.
console.log(a);

/* 
	- methods and properties of a
	- [[Prototype]] of 'a' which is methods/properties of global 'Object'
*/

// 2. 
console.log(a.__proto__);

/* 
	- [[Prototype]] of 'a' which is methods/properties of global 'Object'
*/

// 3.
console.log(a.__proto__.__proto__); 

/* 
	- 'null' end of prototype chain
*/

// 4. 
console.log(b);

/* 
	- methods and properties of 'b'
	- [[Prototype]] of 'b' which is methods/properties of 'a'
	- [[Protptype]] of 'a' which is Global object
*/

// 5. 
console.log(b.__proto__);

/* 
	- [[Prototype]] of 'b' which is methods/properties of 'b'
	- [[Protptype]] of 'a' which is Global object
*/

// 6.
console.log(b.__proto__.__proto__.__proto__);

/* 
	- 'null' end of prototype chain 
*/

// 7.
console.log(b.greet()); // RASENGAN!!!

/* 
	- `greet` methods does not exist on object 'b'
	- JavaScript Engine will look up in the prototype chain 
	- It will find `greet` method on 'a' 
*/