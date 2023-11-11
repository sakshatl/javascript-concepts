function numberOfTimesSortedArrayIsRotated(arr = []) {
  /*
    - number of times the array is rotated will be the index of min element
  */
  let start = 0;
  let end = arr.length - 1;
  let N = arr.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    let prev = (mid + N - 1) % N; 
    let next = (mid + 1) % N;

    // 1. Check if mid is minimum element
    if(arr[mid] < arr[prev] && arr[mid] < arr[next]) {
      return mid;
    }

    // 2. We need to move "start" and "end" to the unsorted portion
    if(arr[mid] <= arr[end]) {
      end = mid - 1;
    } else if (arr[mid] >= arr[start]) {
      start = mid + 1;
    }
  }

  return 0;
}

function main() {
  console.log(numberOfTimesSortedArrayIsRotated([15, 18, 2, 3, 6, 12])); // 2
  console.log(numberOfTimesSortedArrayIsRotated([7, 9, 11, 12, 5])); // 4
  console.log(numberOfTimesSortedArrayIsRotated([7, 9, 11, 12, 15])); //0
}

main();