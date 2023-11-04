function reverseString(str = "") {
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  return str === reverseString(str);
}

function main() {
  console.log(reverseString("hello"));
  console.log(isPalindrome("BOB"));
}

main();