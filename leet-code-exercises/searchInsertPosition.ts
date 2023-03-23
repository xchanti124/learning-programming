const searchInsert = (
  nums: number[],
  target: number,
  l = 0,
  r = nums.length - 1
): number => {
  if (r < l) {
    return l;
  }
  const middleIndex = Math.floor((l + r) / 2);
  const middleNumber = nums[middleIndex];

  if (target === middleNumber) {
    return middleIndex;
  }

  if (target > middleNumber) {
    return searchInsert(nums, target, middleIndex + 1, r);
  }

  return searchInsert(nums, target, l, middleIndex - 1);
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6, 7, 8, 10, 11, 12], 9));
