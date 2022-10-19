function search(
  nums: number[],
  target: number,
  l = 0,
  r = nums.length - 1
): number {
  if (l > r) {
    return -1;
  }
  const middleIndex = ((l + r) / 2) | 0;
  const middleNumber = nums[middleIndex];
  if (middleNumber === target) {
    return middleIndex;
  }
  if (target < middleNumber) {
    return search(nums, target, l, middleIndex - 1);
  }
  return search(nums, target, middleIndex + 1, r);
}
