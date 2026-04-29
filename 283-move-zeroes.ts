// https://leetcode.com/problems/move-zeroes/description/

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// swap
function moveZeroes(nums: number[]): void {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
}

// while
function moveZeroes(nums: number[]): void {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos++] = nums[i];
    }
  }

  while (pos < nums.length) {
    nums[pos++] = 0;
  }
}
