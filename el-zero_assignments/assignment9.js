export default function swapEveryTwoChars(name) {
  let temp = "";
  for (let i = 0; i < name.length; i++) {
    if (i % 2 === 1) {
      temp += name[i];
    } else {
      if (name[i] >= "A" && name[i] <= "Z") {
        temp += name[i].toLowerCase();
      } else if (name[i] >= "a" && name[i] <= "z") {
        temp += name[i].toUpperCase();
      }
    }
  }
  return temp;
}
// function setCharAt(str, index, chr) {
//   if (index > str.length - 1) return str;
//   return str.substring(0, index) + chr + str.substring(index + 1);
// }
