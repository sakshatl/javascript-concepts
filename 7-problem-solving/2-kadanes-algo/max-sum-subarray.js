/*
  - Given an intger array nums
  - find the subarray with largest sum

  NOTE: subarray is a contiguous part of an array
*/

function maxSubarraySum1(nums) {
  let maxSum = nums[0];
  let startIndex;
  let endIndex;
  
  for(let i = 0; i < nums.length; i++) {
    let currentSum = 0
    for(j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      if(currentSum > maxSum) {
        maxSum = currentSum;
        startIndex = i;
        endIndex = j
      }
    }
  }

  return {
    sum: maxSum,
    subArray: nums.slice(startIndex, endIndex + 1)
  };
}

// Kandane's Algorithm
function maxSubarraySum2(nums) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let currentMaxSum = 0;

  for(let i = 0; i < nums.length; i++) {
    currentMaxSum = currentMaxSum + nums[i];

    if(currentMaxSum > maxSum) {
      maxSum = currentMaxSum;
    }
    
    if(currentMaxSum < 0) {
      currentMaxSum = 0;
    }
  }

  return maxSum;
}


/*
  maxSum - 0 
  currentmax - -2

  maxSum = 0
*/

function main() {
  console.log(maxSubarraySum2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
}

main();
