/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let end = nums.length;
  for (let i = 0; i < end; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      i--;
      end--;
    }
    console.log(nums);
  }
}

moveZeroes([0, 0, 1]);

// [0, 1, 2, 0, 4]
// [1, 2, 4, 0, 0]
