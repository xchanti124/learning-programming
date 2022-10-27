// Find the sum of all even numbers a Fibonacci sequence with "limit" number of terms
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584 ... ()
const fibonacci = (limit: number) => {
  let a = 0n;
  let b = 1n;
  let c = 0n;
  let fibonacciArr: bigint[] = [];

  while (c <= BigInt(limit)) {
    a = b;
    b = c;
    c = a + b;
    fibonacciArr.push(c);
  }
  fibonacciArr.pop();
  return fibonacciArr.filter((a) => a % 2n === 0n).reduce((a, b) => a + b);
  // for (let i = 0; i < fibonacciArr.length; i++) {
  //   if (fibonacciArr[i] % 2 === 0) {
  //     evenSum += fibonacciArr[i];
  //   }
  // }
  // return evenSum;
};
console.log(fibonacci(100));
