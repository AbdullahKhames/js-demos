export default function formatNumber(num) {
  let numberString = new String(num);
  let commas = Math.floor((numberString.length - 1) / 3);
  let formattedNumber = "";

  // Loop through each digit and insert commas
  for (let i = 0; i < numberString.length; i++) {
    formattedNumber += numberString[i];
    if ((numberString.length - i - 1) % 3 === 0 && commas > 0) {
      formattedNumber += ",";
      commas--;
    }
  }
  return formattedNumber;
}
