function groupAnagrams(strs = []) {
  let map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split('').sort().join('');

    if(map.has(sortedStr)) {
      // push the new item to the key
      const values = map.get(sortedStr);
      values.push(strs[i]);
      map.set(sortedStr, values);
    } else {
      const values = [];
      values.push(strs[i]);
      map.set(sortedStr, values);
    }

  }

  return Array.from(map.values());
}

function main() {
  console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
}

main();