function integerLimit(num: number): number {
  if (num > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  }
  if (num < (-2) ** 31) {
    return (-2) ** 31;
  }
  return num;
}

function divide(dividend: number, divisor: number): number {
  const dividendAbs = Math.abs(dividend);
  const divisorAbs = Math.abs(divisor);
  let accumulator = 0;

  if (Math.abs(divisor) === 1) {
    return integerLimit(
      divisor === 1
        ? dividend
        : dividend >= 0
        ? -Math.abs(dividend)
        : Math.abs(dividend)
    );
  }

  if (dividend >= 0 && divisor > 0) {
    for (let i = 0; i <= dividend; i += divisor) {
      if (i <= dividend - divisor) {
        accumulator++;
      }
    }
  } else if (dividend < 0 && divisor < 0) {
    for (let i = 0; i <= dividendAbs; i += divisorAbs) {
      if (i <= dividendAbs - divisorAbs) {
        accumulator++;
      }
    }
    return integerLimit(Math.abs(accumulator));
  } else if (dividend < 0 || divisor < 0) {
    for (let i = 0; i <= dividendAbs; i += divisorAbs) {
      if (i <= dividendAbs - divisorAbs) {
        accumulator++;
      }
    }
    return integerLimit(-Math.abs(accumulator));
  }
  return integerLimit(accumulator);
}

// console.log(divide(4, 2));
// console.log(divide(9, 4)); // 2
// console.log(divide(10, 3)); // 3
console.log(divide(7, -3));
console.log(divide(15, -5));
// console.log(divide(5, 5));
// console.log(divide(10, 5));
// console.log(divide(15, 5));
// console.log(divide(20, 5));
// console.log(divide(25, 5));
// console.log(divide(30, 5));
// console.log(divide(50, 5));
// console.log(divide(214748364, 3));
console.log(divide(-2147483648, 1));
