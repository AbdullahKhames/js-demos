export function capitalizeFLetterSlice(word) {
  console.log(word[0].toUpperCase() + word.slice(1));
}

export function capitalizeFLetterCharAt(word) {
  console.log(word.charAt(0).toUpperCase() + word.slice(1));
}

export function capitalizeFLetterReplace(word) {
  console.log(word.replace(/^./, word[0].toUpperCase()));
}

export function capitalizeFLetterSplitMapJoin(word) {
  let result = word
    .split("")
    .map((char, index) => (index === 0 ? char.toUpperCase() : char))
    .join("");
  console.log(result);
}
export function capitalizeFLetterSpreadAndJoin(word) {
  let result = [...word]
    .map((char, index) => (index === 0 ? char.toUpperCase() : char))
    .join("");
  console.log(result);
}

export function capitalizeFLetterArrowFuncWithTemplateLiterals(word) {
  const result = (() => {
    const firstChar = word.charAt(0).toUpperCase();
    const remainingChars = word.slice(1);
    return `${firstChar}${remainingChars}`;
  })();
  console.log(result);
}

export function capitalizeFLetterSimple(word) {
  console.log(word.toUpperCase());
}
