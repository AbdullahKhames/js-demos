export default function arrangeStr(word) {
    return word.slice(-7)+ "" + word.slice(-17, -13) + "" + word.slice(-13, -7);
}
