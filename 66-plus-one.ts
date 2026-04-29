function plusOne(digits: number[]): number[] {
  let n = digits.length;
  let carry = 1;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += carry;
      return digits;
    }
    digits[i] = 0;
  }

  digits.unshift(carry);
  return digits;
}

// time: O(n)
// space: O(1)

function plusOne(digits: number[]): number[] {
  const n = digits.length;
  let carry = 1;

  for (let i = n - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);

    if (carry === 0) break;
  }

  if (carry) digits.unshift(carry);
  return digits;
}

// time: O(n)
// space: O(1)
