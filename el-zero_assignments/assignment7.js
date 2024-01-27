export default function getTwoHighest(arr) {
  const newArr = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  arr.forEach((val) => {
    if (val > newArr[0]) {
      let temp = newArr[0];
      newArr[0] = val;
      if (temp > newArr[1]) {
        newArr[1] = temp;
      }
    } else if (val > newArr[1]) {
      newArr[1] = val;
    }
  });
  return newArr;
}
