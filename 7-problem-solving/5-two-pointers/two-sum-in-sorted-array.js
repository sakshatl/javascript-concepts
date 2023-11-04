function twoSum(nums = [], target = 0) {
  let start = 0;
  let end = nums.length - 1;

  while(start < end) {
    let sum = nums[start] + nums[end];

    if(sum === target) {
      return [start, end];
    } else if (sum > target) {
      end = end - 1;
    } else {
      start = start + 1;
    }
  }

  return [-1, -1];
}

function main() {
  twoSum()
}