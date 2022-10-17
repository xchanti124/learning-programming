function longestCommonPrefix(strs: string[]): string {
  if (strs.some((str) => str.length === 0)) {
    return "";
  } // if there is an empty string, it returns an empty string

  for (let i = 0, prefix = ""; ; i++) {
    if (i === strs[0].length) {
      return prefix;
    }
    if (strs.every((str) => str[i] === strs[0][i])) {
      // compares the first i letters of each string (str[i]) to the first i letters of the first string (strs[0][i])
      prefix += strs[0][i];
      continue;
      // we want all of the correct first letters to be added to prefix, so we only want the return statement to be reached
      // when the if becomes falsy, therefore continue is used to make it reach return only when if is done
    }
    return prefix;
  }
}

console.log(longestCommonPrefix(["flower", "flow", "fly"]));
