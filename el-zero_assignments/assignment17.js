export default function formatName(theName) {
  return theName.split(" ").map((val, ind) => {
    if(ind === 0) {
        return val[0].toUpperCase();
    } else {
        return val[0].toLowerCase();
    }
  })
  .join(".")
}
