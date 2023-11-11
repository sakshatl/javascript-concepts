function topKFrequent(nums = [], k = 0) {
  let map = new Map(); // elem => count

  for (let i = 0; i < nums.length; i++) {
    let elem = nums[i];

    if(map.has(elem)) {
      let val = map.get(elem);
      val = val + 1;
      map.set(elem, val);
    } else {
      map.set(elem, 1);
    }

  }

  const entries = Array.from(map.entries());
  entries.sort((a, b) => b[1] - a[1]);

  let result = [];

  for(let i = 0; i < k; i++) {
    result.push(entries[i][0]);
  }

  return result;
}

function main() {
  console.log(topKFrequent([1,1,1,2,2,3], 2));
}

main();