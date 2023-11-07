function maxOccurrenceOptimized(nums = []) {
  let map = new Map();

  for (let num of nums) {
    if(map.has(num)) {
      const val = map.get(num);
      map.set(num, val + 1);
    } else {
      map.set(num, 1);
    }
  }

  let max = 0;
  let val;

  for(let [key, value] of map) {
    const count = map.get(key);
    if(count > max) {
      max = count;
      val = key;
    }
  }

  return { val, count: max };
}

function main() {
  console.log(maxOccurrenceOptimized([0,0,1,1,1,2,2,3,3,4]));
}

main();

// [0,0,1,1,1,2,2,3,3,4]