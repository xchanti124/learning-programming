function containsDuplicate(nums: number[]): boolean {
  const numberMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (numberMap.has(nums[i])) {
      return true;
    }
    numberMap.set(nums[i], true);
  }
  return false;
}
console.log(containsDuplicate([1, 2, 4, 3]));
