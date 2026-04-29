// https://leetcode.com/problems/decode-xored-array/description/

// Input: encoded = [1,2,3], first = 1
// Output: [1,0,2,1]

function decode(encoded: number[], first: number): number[] {
  const result = new Array(encoded.length + 1).fill(0);
  result[0] = first;

  for (let i = 0; i < encoded.length; i++) {
    result[i + 1] = result[i] ^ encoded[i];
  }

  return result;
}

function decode(encoded: number[], first: number): number[] {
  const result: number[] = [first];

  encoded.map((val, i) => result.push(result[i] ^ val));

  return result;
}

const exc = decode([1, 2, 3], 1);
console.log(exc);
