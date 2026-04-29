// https://leetcode.com/problems/sum-of-unique-elements

// bruce force
function sumOfUnique(nums: number[]): number {
  const max = Math.max(...nums);
  const fre_count = new Array(max + 1).fill(0);

  for (const num of nums) {
    fre_count[num]++;
  }

  let ans = 0;
  for (const num of nums) {
    if (fre_count[num] === 1) {
      ans += num;
    }
  }

  return ans;
}

// Time → still O(n)
// Space → O(max(nums)), which can be much larger than n

// hashmap
function sumOfUnique(nums: number[]): number {
  const map = new Map<number, number>();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let ans = 0;
  for (const [num, count] of map) {
    if (count === 1) {
      ans += num;
    }
  }

  return ans;
}

// ⏱ Complexity:
// Time: O(n)
// Space: O(n)

// 👉 Ưu điểm:

// Không phụ thuộc max(nums)
// Dùng được cho mọi giá trị (kể cả lớn, âm)

// 2 set

function sumOfUnique(nums: number[]): number {
  const map = new Set<number>();
  const duplicated = new Set<number>();

  let ans = 0;
  for (const num of nums) {
    if (!map.has(num)) {
      map.add(num);
      ans += num;
    } else if (!duplicated.has(num)) {
      duplicated.add(num);
      ans -= num;
    }
  }

  return ans;
}
