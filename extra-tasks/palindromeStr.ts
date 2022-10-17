function isPalindrome(s: string): boolean {
  let reverseStr = "";
  let finalS = s.toLowerCase().replace(/[\W_]/g, "");
  for (let i = finalS.length - 1; i >= 0; i--) {
    reverseStr += finalS[i];
  }
  return finalS === reverseStr;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
