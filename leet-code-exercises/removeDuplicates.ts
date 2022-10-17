function removeDuplicates(nums: number[]): number {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], true);
      continue;
    }
    nums.splice(i, 1);
    i--;
  }
  return nums.length;
}

// we need to do this because after each time splice gets executed, the array size shrinks by 1,
// and we would skip one element if we didn't have i--, which would reset i to where it was before splice
// example: if i=3 and splice gets executed, in the next iteration i would equal to 4, but i-- will bring it back to 3
