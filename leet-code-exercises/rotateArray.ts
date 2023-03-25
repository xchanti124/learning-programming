// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    const num = nums.pop();
    nums.unshift(num!); // ! means "igonre the undefined or null"
  }
}

const nums = [-1, -100, 3, 99];
rotate(nums, 2);
console.log(nums);
