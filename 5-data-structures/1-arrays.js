let arr = [1, 2, "Sakshat"];

console.log(arr[0]); // 1

// iterate
for(const item of arr) {
  console.log(item);
}

// adding elements to the end of array
arr.push(10);
console.log(arr);

// adding elements to the beginning of array
arr.unshift(20); 
console.log(arr);

// remove an item from end of array
arr.pop();
console.log(arr);

// remove an item from the beginning of array
arr.shift();
console.log(arr);

// other array methods (map, filter, concat, slice, splice and reduce)
