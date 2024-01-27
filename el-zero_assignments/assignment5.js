export default function replaceFirstWithLast(word) {
  //   const arr = [...word];
  //   const temp = arr[0];
  //   arr[0] = arr[word.length - 1];
  //   arr[word.length - 1] = temp;
  const temp = word[0];
  return word[word.length - 1] + word.slice(1, word.length - 1) + temp;
}
