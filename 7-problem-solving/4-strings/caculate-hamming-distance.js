// Hamming Distance: 
// It is the number of positions at which the corresponding letters are different

function hammingDistance(str1 = "", str2 = "") {
  if(str1.length !== str2.length) {
    return new Error('Strings must be of equal length');
  }

  let distance = 0;

  for (let i = 0; i < str1.length; i++) {
    if(str1[i] !== str2[i]) {
      distance = distance + 1;
    }
  }

  return distance;
}

function main() {
  console.log(hammingDistance("hello", "hwllr"));
}

main();