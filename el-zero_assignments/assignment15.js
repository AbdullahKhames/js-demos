export default function concatenateWithoutLast(words) {
  return words.map((val) => val.slice(0, -1)).join(" ");
}
