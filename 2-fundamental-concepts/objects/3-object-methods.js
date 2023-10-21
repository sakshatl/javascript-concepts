"use strict"

// === "this" TO ACCESS OBJECT'S DATA =========

let user = {
  name: "Sakshat",
  greet: function() {
    console.log(`${this.name} says hello 👋`);
  }
}

user.greet();

// === "this" IS NOT BOUND ====

/*
  - The value of this is evaulauted during the runtime
  - Depending upon the context from where it is called

  - Example:
    same function can use user in 2 different objects and produce different results
*/

function printName() {
  console.log(`Name: ${this.name}`);
}

let obj1 = { name: "Naruto", getName: printName };
let obj2 = { name: "Hinata", getName: printName };
let obj3 = { name: "Sasuke" };

obj1.getName(); // Naruto
obj2.getName(); // Hinata





