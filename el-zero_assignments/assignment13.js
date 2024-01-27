export default function sliceDemo(name) {
  console.log(name.slice(0, 1) + "" + name.slice(-1));
  console.log(name.slice(1, -1));
  const mid = Math.floor(name.length / 2)
  console.log(name.slice(mid - 1, mid + 1));
}
