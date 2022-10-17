function addBinary(a: string, b: string): string {
  let carry = false;
  let acc = "";
  if (a.length > b.length) {
    b = b.padStart(a.length, "0");
  } else {
    a = a.padStart(b.length, "0");
  }
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === "0" && b[i] === "0") {
      acc = (carry ? "1" : "0") + acc;
      carry = false;
      continue;
    }
    if (a[i] === "1" && b[i] === "1") {
      acc = (carry ? "1" : "0") + acc;
      carry = true;
      continue;
    }
    if (a[i] === "1" || b[i] === "1") {
      acc = (carry ? "0" : "1") + acc;
    }
  }
  if (carry) {
    acc = "1" + acc;
  }
  return acc;
}
console.log(addBinary("111", "1010")); // 10001

// 1 = 1
// 2 = 10
// 3 = 11
// 4 = 100
// 5 = 101
// 6 = 110
// 7 = 111
// 8 = 1000
// 9 = 1001
// 10 = 1010
// 11 = 1011
// 12 = 1100
// 13 = 1101
// 14 = 1110
// 15 = 1111
