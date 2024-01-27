export function getLLetterSimple(word) {
  console.log(word[word.length - 1]);
}

export function getLLetterSlice(word) {
  console.log(word.slice(-1));
}

export function getLLetterCharAt(word) {
  console.log(word.charAt(word.length - 1));
}

export function getLLetterMatch(word) {

  console.log(word.match(/.$/)[0]);
}

