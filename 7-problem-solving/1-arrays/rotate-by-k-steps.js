/*
  - Given an integer k and an array arr
  - rotate the array by k steps
*/

// arr = [1, 2, 3, 4, 5, 6, 7], k = 3

function rotateArray(nums = [], k = 0) {
  let size = nums.length;

  // in case we have a greater value for k 
  // why to make unncecessary roatations
  if(k > size) {
    k = k / size;
  }

  const removedElements = nums.splice(size - k, size); // remove the last k elements from the array
  nums.unshift(...removedElements); // insert this elements to the beginnning of the array

  return nums;
} 

function rotateArray2() {}

function main() {
  console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
}

main();


