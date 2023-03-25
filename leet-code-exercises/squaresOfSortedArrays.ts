function sortedSquares(nums: number[]): number[] {
  const newArray = [];
  for (let i = 0; i < nums.length; i++) {
    newArray.push(nums[i] ** 2);
  }
  return newArray.sort((a, b) => a - b);
}

console.log(sortedSquares([-4, -3, 2]));
