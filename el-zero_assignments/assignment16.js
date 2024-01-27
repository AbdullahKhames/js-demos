export default function getCharacters(word, nums) {
  return word.slice(0, nums) + "" + word.slice(-nums);
}
