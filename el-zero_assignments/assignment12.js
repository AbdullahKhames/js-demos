export default function sameFirstAndLastIgnoreCase(names) {
  return names.filter((val) => {
    return val[0].toUpperCase() === val[val .length - 1].toUpperCase();
  });
}
