function findPeakElement(nums: number[], l = 0, r = nums.length - 1): number {
  if (l > r) {
    return -1;
  }
  const middleIndex = Math.floor((l + r) / 2);
  const middleNumber = nums[middleIndex];
  const leftNeighbor = nums[middleIndex - 1] ?? -Infinity;
  const rightNeighbor = nums[middleIndex + 1] ?? -Infinity;
  if (middleNumber > leftNeighbor && middleNumber > rightNeighbor) {
    return middleIndex;
  }
  if (middleNumber < leftNeighbor) {
    return findPeakElement(nums, l, middleIndex - 1);
  }
  return findPeakElement(nums, middleIndex + 1, r);
}

console.log(findPeakElement([]));

// [1, 3, 6, 5, 8, 4, 9]
