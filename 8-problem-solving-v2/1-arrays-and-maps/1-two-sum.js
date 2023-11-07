function twoSumNaive(nums = [], target = 0) {
  for (let i = 0; i < nums.length; i++) {
    let numToFind = target - nums[i];
    for (let j = 0; j < nums.length; j++) {
      if(nums[j] === numToFind && i !== j) {
        return [i, j];
      }
    }
  }

  return [-1, -1];
}

function twoSumOptimized(nums = [], target = 0) {
  let map = new Map();

  for(let i = 0; i < nums.length; i++) {
    let key = nums[i];
    map.set(key, i);
  }

  for(let i = 0; i < nums.length; i++) {
    let numToFind = target - nums[i];
    if(map.has(numToFind) && map.get(numToFind) !== i) {
      return [map.get(numToFind), i];
    }
  }

  return [-1, -1];
}

function main() {
  console.log(twoSumNaive([2,7,11,15], 9));
  console.log(twoSumNaive([3,2,4], 6));
  console.log(twoSumNaive([3,3], 6));

  console.log("====");

  console.log(twoSumOptimized([2,7,11,15], 9));
  console.log(twoSumOptimized([3,2,4], 6));
  console.log(twoSumOptimized([3,3], 6));

}

main();


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.