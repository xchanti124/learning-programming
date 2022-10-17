// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
// A divisor of an integer x is an integer that can divide x evenly.
// Given an integer n, return true if n is a perfect number, otherwise return false.

function checkPerfectNumber(num: number): boolean {
  let numArr = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      numArr.push(i);
    }
  }
  return (
    numArr.reduce(
      (previousValue: number, currentValue: number) =>
        previousValue + currentValue,
      0
    ) === num
  );
}
