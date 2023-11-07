"use strict";

console.log(this); // Window

function greet() {
  console.log(this);
}

let obj = {
  name: 'Sakshat',
  greet
}

obj.greet(); // obj
greet();

const bindedGreet = greet.bind(obj);
bindedGreet();


greet.call({ hello: "world" });

