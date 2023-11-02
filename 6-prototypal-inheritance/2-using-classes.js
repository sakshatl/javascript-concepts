class Ninja {
  attack() {
    return 'RASNEGAN!!!';
  }
}

let minato = new Ninja();
console.log(minato); // Ninja { }

let naruto = new Ninja();
console.log(naruto); // Ninja { }

// console.log(minato === naruto); // false, as they are 2 different objects
// console.log(minato.__proto__ === naruto.__proto__); // true, as they have same [[Prototype]] property


// === Object.getPrototypeOf() and Object.setPrototypeOf() =========

console.log(Object.getPrototypeOf(minato) === Object.getPrototypeOf(naruto)); // true

Object.setPrototypeOf(naruto, null);

console.log(Object.getPrototypeOf(minato) === Object.getPrototypeOf(naruto)); // false
