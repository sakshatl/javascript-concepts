let map = new Map([["a", 1], ["b", 2]]);
console.log(map);

// === Iteration ====
for (let [key, value] of map) {
  console.log(key, value);
}

// === Adding a key / value pair ======
map.set("c", 3);
console.log(map);

// === Remove a key / value pair ====== 
map.delete('b');
console.log(map);

// === Check if a key exists =====
console.log(map.has('a'));
console.log(map.has('b'));

// === Return the size of map =====
console.log(map.size);