let set = new Set([1, 2, 3, 3, 3, 4, 5, 6]); 
console.log(set); // removes the duplicate values

// === Iteration ====
for(let item of set) {
  console.log(item);
}

// === Check if an item exists =====
console.log(set.has(10)); // false
console.log(set.has(1)); // true

// === Add an item ====
set.add(20);
console.log(set);

// ===  Remove / Delete an item ====
set.delete(6);

// === Size of the set ======
console.log(set.size);

// === Delete all the items =====
set.clear();

console.log(set)