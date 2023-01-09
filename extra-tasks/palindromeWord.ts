const palindromeWord = (word: string): boolean => {
  let reverse = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return word === reverse;
};

console.log(palindromeWord("bob"));
console.log(palindromeWord("cat"));
console.log(palindromeWord("civic"));
console.log(palindromeWord("radar"));
