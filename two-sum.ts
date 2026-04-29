// Hashmap

function twoSum(nums: number[], target: number): number[] {
  const storeMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remain = target - num;

    const stored = storeMap.get(remain);
    if (stored !== undefined) {
      return [stored, i];
    }
    storeMap.set(num, i);
  }

  return [];
}

// time complex: O(n)
// space complex: O(n) -> thay vi` O(1) cuz storeMap have to store value due to num

//

// bruce force
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

// time complex n * n
// space: O(1)

function twoSum(nums: number[], target: number): number[] {
  const arr = nums.map((val, idx) => [val, idx]);
  arr.sort((a, b) => a[0] - b[0]);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left][0] + arr[right][0];

    if (target === sum) {
      return [arr[left][1], arr[right][1]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

// time complex --> O n log N -> vi` sort
// map -> O(n) + sort ->  O n log N + while -> O(n)
// space: arr (O(n)), left, right, sum = O(1) -> On
