
// Brute Force
function maxAndSecondMax1(arr = []) {
  let uniqueArr = Array.from(new Set(arr));

  uniqueArr.sort((a, b) => b - a);

  if(uniqueArr.length >= 2) {
    const largest = uniqueArr[0];
    const secondLargest = uniqueArr[1];
    return [largest, secondLargest];

  } else {
    return -1;
  }
} // O(nlogn)


// Optimized Solution
function maxAndSecondMax2(arr = []) {
  let largest = Number.MIN_SAFE_INTEGER;
  let secondLargest = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > largest) {
      largest = arr[i];
      secondLargest = largest;
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest[arr[i]];
    }
  }

  return [largest, secondLargest];
} // O(n)


function main() {
  let arr1 = [12, 35, 1, 10, 34, 1];
  console.log(maxAndSecondMax1(arr1));
  console.log(maxAndSecondMax2(arr1));
}

main();