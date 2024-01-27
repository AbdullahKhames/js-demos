export function clearArr1(arr) {
  arr.length = 0;
  return arr;
}
/**
 * This method uses the delete operator to remove each element in the array.
 * However, this leaves undefined slots in the array,
 * and it's not considered a good practice for clearing arrays.
 * The array still has the same length, but the elements are set to undefined.
 */
export function clearArr2(array) {
  for (let index = 0; index < array.length; index++) {
    delete array[index];
  }
  return array;
}
export function clearArr3(array) {
  array.splice(0, array.length);
  return array;
}
export function clearArr4(array) {
  for (let index = array.length - 1; index >= 0; index--) {
    array.pop();
  }
  return array;
}

export function clearArr5(array) {
  while (array.length > 0) {
    array.shift();
  }
  return array;
}
