export default function repeatWithRules(word) {
  const temp = [...word];
  const changed = temp.map((val, ind) => {
    if (ind === 0) {
        return val;
    }
    return val.repeat(ind + 1);
  });
  let repeatedWord = "";
  for (let i = 0; i < changed.length; i++) {
    repeatedWord += changed[i];
  }
  return repeatedWord;
}
