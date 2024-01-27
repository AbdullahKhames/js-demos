export default function dashBetweenOdd(num) {
  let str = "";
  const numStr = new String(num);
  for (let index = 0; index < numStr.length; index++) {
    str += numStr[index];
    if (numStr[index] % 2 === 1 && numStr[index + 1] % 2 === 1) {
      str += "-";
    }
  }
  return str;
}
