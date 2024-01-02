let obj = {
  name: 'sakshat',
  age: 25
}

// === Access ========

console.log(obj.name);
console.log(obj['age']);

// === Object Methods =====

// 1. To get all keys
console.log(Object.keys(obj));

// 2. To get all values
console.log(Object.values(obj));

// 3. To get all keys and values
console.log(Object.entries(obj));

// === Delete a key and value pair ====

delete obj['age']; // or `delete obj.age`