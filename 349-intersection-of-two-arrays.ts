function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const result = new Set<number>();

  for (const num of nums2) {
    if (set1.has(num)) {
      result.add(num);
    }
  }

  return Array.from(result);
}

// TIME
// O(n + m)
// duyệt nums1 → O(n)
// duyệt nums2 → O(m)
// O(n + k) - space
// trong đó:

// set nums1: O(n)
// result set: O(k) (k ≤ n)

function intersection_2(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const result = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length && j < nums2.length) {
    console.log(nums1[i] === nums2[j]);
    if (nums1[i] === nums2[j]) {
      if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
        result.push(nums1[i]);
      }
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  console.log(result);

  return result;
}

const exc = intersection_2([1, 2, 2, 1], [2, 2]);
console.log("object", exc);

// todo: binary search
