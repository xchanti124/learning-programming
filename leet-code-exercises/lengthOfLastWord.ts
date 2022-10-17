function lengthOfLastWord(s: string): number {
  const splitStr = s.trim().split(/\s+/g);
  return splitStr[splitStr.length - 1].length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));
