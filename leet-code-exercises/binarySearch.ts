const search = (
  nums: number[],
  target: number,
  l = 0,
  r = nums.length - 1
): number => {
  if (r < l) {
    return -1;
  }

  const middleIndex = ((l + r) / 2) | 0;
  // Bitwise or (| 0) will just return the actual number, but as an integer. It's the same as doing Math.floor()
  const middleNumber = nums[middleIndex];

  if (middleNumber === target) {
    return middleIndex;
  }

  if (target > middleNumber) {
    return search(nums, target, middleIndex + 1, r);
  }

  return search(nums, target, l, middleIndex - 1);
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
