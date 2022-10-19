// Given a sorted array of numbers in ascending order, find whether a number exists in the array, complexity O(log(n))

const findNumber = (
  numsArr: number[],
  num: number,
  l = 0,
  r = numsArr.length - 1
): boolean => {
  if (l > r) {
    return false;
  }
  const middleIndex = ((l + r) / 2) | 0;
  const middleNumber = numsArr[middleIndex];
  if (middleNumber === num) {
    return true;
  }
  if (num < middleNumber) {
    return findNumber(numsArr, num, l, middleIndex - 1);
  }
  return findNumber(numsArr, num, middleIndex + 1, r);
};

console.log(findNumber([1, 2, 3, 4, 5], 4));
console.log(findNumber([1, 2, 3, 4, 5], 5));
