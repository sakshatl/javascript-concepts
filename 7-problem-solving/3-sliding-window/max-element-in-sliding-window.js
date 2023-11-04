function maxElementInSlidingWindow(nums = [], k) {

  let i = 0;
  let j = 0;

  let result = [];
  let temp = []; // to store max element


  while (i < nums.length) {
    let windowSize = i - j + 1;

    for (let t in temp) {
      if(t < nums[i]) {
        temp.shift();
      }
    }

    temp.push(nums[i]);

    if(windowSize < k) {
      i = i + 1;
    } else if (windowSize === k) {
      result.push(temp[0]);

      if(nums[j] === temp[0]) {
        temp.shift();
      }

      i = i + 1;
      j = j + 1;
    }
  } 

  return result;
} 

function main() {
  console.log(maxElementInSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]
}

main();