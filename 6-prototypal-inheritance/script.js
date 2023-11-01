let parent = {
  name: 'Minato',
  age: 30,
  greet: function() {
    console.log('RASENGAN!!!');
  }
};

// Create a new 'child' object with 'parent' as its prototype
let child = Object.create(parent);

// Accessing methods and properties throught prototype chain
console.log(child.greet());