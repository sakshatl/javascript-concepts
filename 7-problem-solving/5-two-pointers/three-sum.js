function threeSum(nums = [], target = 0) {
  nums.sort((a, b) => a - b);
  // -4, -1, -1 0, 1, 2

  let start = 0;
  let end = nums.length; 

  let results = []

  let i = 0

  while(start < end) { 
    let sum = nums[i] + nums[start] + nums[end];

    if(sum === 0) {
      results.push([i, start, end]);
    } else if (sum > target) {
      end = end - 1 
    } else {
      start = start + 1;
    }

    i++;
  }

  return results;
}

function main() {
  console.log(threeSum([-1, 0, 1, 2, -1, -4], 0)); 
}

main();