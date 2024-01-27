export default function closestToTarget(values, target) {
  let closest = values[0];
  values.forEach(function (num) {
    if (this - closest > this - num) {
      closest = num;
    }
  }, target);
  return closest;
}
