// Given an array of sorted numbers in ascending order, find if a number exists in the array
const arrayContains = (arr: number[], query: number): boolean => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === query) {
      return true;
    }
  }
  return false;
};
