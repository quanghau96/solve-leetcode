// https://leetcode.com/problems/remove-element/

// Two Pointers – Forward (giữ thứ tự)
function removeElement(nums: number[], val: number): number {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
}

// Two Pointers – Opposite Ends / Partition-style
// i → từ đầu
// n → thu hẹp từ cuối

function removeElement(nums: number[], val: number): number {
  let i = 0;
  let n = nums.length;

  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1];
      n--;
    } else {
      i++;
    }
  }

  return n;
}

// Move zeroes
// Dutch National Flag
// QuickSort partition

const exc = removeElement([1, 3, 2, 4, 2, 3], 3);
console.log(exc);
