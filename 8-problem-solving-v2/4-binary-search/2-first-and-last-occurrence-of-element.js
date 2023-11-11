function firstAndLastOccurrence(arr = [], target = 0) {
  if(arr.length === 0) {
    return [-1, -1];
  }

  const firstOccurrence = calculateFirstOccurrence(arr, target);
  const lastOccurrence = calculateLastOccurrence(arr, target);

  return [firstOccurrence, lastOccurrence];
}

function calculateFirstOccurrence(arr = [], target = 0) {
  let start = 0;
  let end = arr.length - 1;

  let result = -1;

  while (start <= end) {
    let mid = Math.floor(start + ((end - start) / 2));

    if(target === arr[mid]) {
      /*
        - we cannot directly return mid
        - as we need to be sure that this mid is the first occurrence of target
      */
      result = mid;  // store the result
      end = mid - 1; // need to check for indexes before mid;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    }
  }

  return result;
}

function calculateLastOccurrence(arr = [], target = 0) {
  let start = 0;
  let end = arr.length - 1;

  let result = -1;

  while (start <= end) {
    let mid = Math.floor(start + ((end - start) / 2));

    if(target === arr[mid]) {
      /*
        - we cannot directly return mid
        - as we need to be sure that this mid is the first occurrence of target
      */
      result = mid;  // store the result
      start = mid + 1; // need to check for indexes before mid;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid]) {
      start = mid + 1;
    }
  }

  return result;
}

function main() {
  console.log(firstAndLastOccurrence([2, 4, 10, 10, 10, 18, 20], 10));
}

main();