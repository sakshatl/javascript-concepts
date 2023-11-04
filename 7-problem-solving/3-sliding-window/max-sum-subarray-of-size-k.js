/*
  - given an interger array 'nums' and an integer 'k'
  - find the maximum subarray sum of size k
*/

// Brute Force Solution
function maxSumSubarrayOkSizeK(arr = [], k) {
  arr = Array.from(new Set(arr));

  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentMaxSum = 0;
    for(let j = i; j < i + k; j++) {
      currentMaxSum = currentMaxSum + arr[j];
    }

    if(currentMaxSum > maxSum) {
      maxSum = currentMaxSum;
    }
  }

  return maxSum;
}

/*
  Problems with above code
  - repitotive work 
*/

function maxSumSubarrayOkSizeK2(nums = [], k) {
  let maxSum = 0;
  let currentSum = 0;

  let j = 0;
  let i = 0;

  while(i < nums.length) {
    debugger
    let windowSize = i - j + 1;

    currentSum = currentSum + nums[i];

    if(windowSize < k) {
      // do some calculation
      i++;
    } else if (windowSize === k) {
      // get a result
      maxSum = Math.max(currentSum, maxSum);
      currentSum = currentSum - nums[j];
      j++;
      i++;
    }

  }

  return maxSum;
}


function main() {
  console.log(maxSumSubarrayOkSizeK2([1, 5, 4, 2, 9, 9, 9], 3));
  console.log(maxSumSubarrayOkSizeK2([1, 7, 8, 9], 3))
  console.log(maxSumSubarrayOkSizeK2([4, 4, 4,], 3));
}

main();