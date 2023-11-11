function binarySearchOnReverseSortedArr(arr = [], target = 0) {
  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {
    let mid = Math.floor(start + ((end - start) / 2));

    if(target < arr[mid]) {
      start = mid + 1;
    } else if (target > arr[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
}

function main() {
  console.log(binarySearchOnReverseSortedArr([20, 17, 15, 14, 13, 12, 10, 9, 8, 4], 9));
}

main();