export default function addEl(name) {
  if (!name || name.startsWith("El")) {
    return name;
  }
  return "El" + name;
}
// module.exports = { addEl };
