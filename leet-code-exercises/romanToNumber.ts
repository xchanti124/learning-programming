function romanToInt(s: string): number {
  let num = 0;
  const romanToNumber = new Map([
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
  ]);
  const keysArr = [...romanToNumber.keys()];

  while (s.length > 0) {
    for (let i = keysArr.length - 1; i >= 0; i--) {
      if (s.startsWith(keysArr[i])) {
        num += romanToNumber.get(keysArr[i]) as number;
        s = s.slice(keysArr[i].length);
      }
    }
  }
  return num;
}
console.log(romanToInt("MCM"));

// each iteration checks if string starts
// for loop inside of while loop
// inside of infinite loop, iterate over the keysArr in descending order
// if the s starts with the current key, we add the value of that number (with .get()) to the variable num
// + add if statement for .get() returns is undefined
// type of the value that gets returned by .get() is either a number or undefined
// without if: romanToNumer.get("IX") as number;
// if the s starts with the current key, we remove that substring from the beginning of s (s gets modified)
