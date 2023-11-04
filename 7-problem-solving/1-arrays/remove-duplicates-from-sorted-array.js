/*
  - Given ar array of integers in non-decreasing order
  - return the length of array with duplicates removed
  - NOTE: do this in-place
*/

// Brute Force
function removeDuplicates1(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--; // go back to the initial position of i
    }
  }

  return nums;
}

// 2-pointer
function removeDuplicates2(nums) {
  let j = 0;
  let i = 0;
  while (i < nums.length) {
    if(i + 1 === nums.length) { // last element
      break;
    }

    if(nums[i] !== nums[i + 1]) {
      j = j + 1;
      nums[j] = nums[i + 1];
    }

    i = i + 1;
  }

  // last element
  j = j + 1;
  nums[j] = nums[nums.length - 1];

  return 
}

function main() {
  console.log(removeDuplicates1([1, 1, 2]))
  console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
}

main();