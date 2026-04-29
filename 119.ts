function getRow(rowIndex: number): number[] {
  const maxItem = rowIndex + 1;
  const row = [];

  for (let i = 0; i < maxItem; i++) {
    row.push(1);

    for (let j = i - 1; j > 0; j--) {
      row[j] = row[j - 1] + row[j];
    }
  }

  return row;
}

const exc = getRow(3);

console.log(exc);
