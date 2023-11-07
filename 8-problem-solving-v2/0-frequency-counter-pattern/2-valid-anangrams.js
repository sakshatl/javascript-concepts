function validAnagramsNaive(str1 = "", str2 = "") {
  let len1 = str1.length;
  let len2 = str2.length;
  
  if(len1 !== len2) return false;

  // Convert these into an array for easy removal of characters
  let arr1 = str1.split('');
  let arr2 = str2.split('');

  for (let char of arr1) {
    // Get the index of each character of str1 in str2
    const index = arr2.indexOf(char);
    if(index === -1) return false;

    // Remove the character at that index
    arr2.splice(index, 1);
  }

  return true;
} // O(N^2);

function validAnagramsOptimized1(str1 = "", str2 = "") {

  // Convert the strings to their lowercase form and sort them
  str1 = str1.toLowerCase().split('').sort().join();
  str2 = str2.toLowerCase().split('').sort().join();

  return str1 === str2;
} // O(NlogN)

function validAnagramsOptimized2(str1 = "", str2 = "") {
  if(str1.length !== str2.length) return false;

  let map1 = new Map();
  let map2 = new Map();

  for (char of str1) {
    if(map1.has(char)) {
      const value = map1.get(char);
      map1.set(char, value + 1)
    } else {
      map1.set(char, 1);
    }
  }

  for (char of str2) {
    if(map2.has(char)) {
      const value = map2.get(char);
      map2.set(char, value + 1)
    } else {
      map2.set(char, 1);
    }
  }

  for (let [key, value] of map1) {
    if(map1.get(key) !== map2.get(key)) {
      return false;
    }
  }

  return true;
}

function main() {
  console.log(validAnagramsNaive("rat", "car"));
  console.log(validAnagramsNaive("anagram", "nagaram"));
  console.log(validAnagramsNaive("aacc", "ccac"));

  console.log("===")

  console.log(validAnagramsOptimized1("rat", "car"));
  console.log(validAnagramsOptimized1("anagram", "nagaram"));
  console.log(validAnagramsOptimized1("aacc", "ccac"));

  console.log("===");
  console.log(validAnagramsOptimized2("rat", "car"));
  console.log(validAnagramsOptimized2("anagram", "nagaram"));
  console.log(validAnagramsOptimized2("aacc", "ccac"))
}

main();