function mySqrt(x: number): number {
  for (let i = 0; ; i++) {
    if (i * i === x) {
      return i;
    }
    if (i * i > x) {
      return i - 1;
    }
  }
}
console.log(mySqrt(20));

// ts needs every path of the function to return a number (whatever the type is)

// if the loop is infinite (second argument not provided) then either the function will never stop executing or
// that the return conditions will be reached

// both return a number

// if there is a second argument, there will be a condition where the for loop ends, meaning that neither
// of the return statements get reached and "undefined"

// would be returned, which is why it doesn't compile (there is a path where it is possible for the function to
// return something else than a number)
