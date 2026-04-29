// https://leetcode.com/problems/pascals-triangle/description/

function generate(numRows: number): number[][] {
  const res: number[][] = [];
  const arrow = [];

  for (let i = 0; i < numRows; i++) {
    arrow.push(1);
    for (let j = i - 1; j > 0; j--) {
      arrow[j] = arrow[j] + arrow[j - 1];
    }

    res.push([...arrow]);
  }

  return res;
}

function generate(numRows: number): number[][] {
  const res = [];

  for (let i = 0; i < numRows; i++) {
    const row = Array.from({ length: i + 1 }).fill(1);

    for (let j = 1; j < i; j++) {
      row[j] = res[i - 1][j - 1] + res[i - 1][j];
    }

    res.push(row);
  }

  return res;
}

const exc = generate(5);
console.log(exc);

// i = 0 ==> [[1]]
// i = 1 ==> [[1], [1,1]]
// i = 2, j = 1 ==> [[1], [1,1], [1,2,1]]

// i = 3, j = 2 ==> [[1], [1,1], [1,2,1], [1,3,3,1]]
