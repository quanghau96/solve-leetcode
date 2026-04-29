function prefix(nums: number[]): number[] {
  const arr: number[] = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    arr.push(nums[i] + arr[i - 1]);
  }

  return arr;
}

// time O(n)
// space O(n)

// const exct = prefix([-2, 0, 3, -5, 2, -1]);

// console.log("exct", exct);

// https://leetcode.com/problems/range-sum-query-immutable/

function rageSum(nums): number[] {
  const arr = nums[0][0];
  const result = [null];

  for (let i = 1; i < nums.length; i++) {
    let left = nums[i][0];
    let right = nums[i][1];
    let sum = 0;
    for (let j = left; j <= right; j++) {
      sum += arr[j];
    }
    result.push(sum);
  }

  return result;
}

// time O(n*n)
// space: n

const exct = rageSum([[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]);

console.log("exct", exct);

class NumArray {
  private prefix: number[] = [];

  constructor(nums: number[]) {
    this.prefix.push(nums[0]);

    for (var i = 1; i < nums.length; i++) {
      this.prefix.push(nums[i] + this.prefix[i - 1]);
    }
  }

  sumRange(left: number, right: number): number {
    if (left === 0) return this.prefix[right];
    return this.prefix[right] - this.prefix[left - 1];
  }
}
// time O(n)
// space O(n)
