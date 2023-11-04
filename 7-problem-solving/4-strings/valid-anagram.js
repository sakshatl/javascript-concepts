// Anagram:
// It is word or phrase, formed by re-arranging the letters of different word or phrase
// Example: eat and tea


function validAnagram(str1 = "", str2 = "") {
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');


  return str1 === str2;
}

function main() {
  console.log(validAnagram("eat", "tea"));
}

main();