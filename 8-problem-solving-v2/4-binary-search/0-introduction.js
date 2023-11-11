function binarySearch(arr = [], target = 0) {
  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {
    let mid = Math.floor((start + end) / 2);

    if(target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

function main() {
  console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 2));
}

main();