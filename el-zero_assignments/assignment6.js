export function checkBiggestNum(word) {
  const arr = [...word];
  return arr.reduce((start, val) => {
    return Math.max(val, start);
  }, Number.MIN_SAFE_INTEGER);
}

