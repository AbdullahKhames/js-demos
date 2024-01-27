export function clearDup1(array) {
  // select max from array
  let max = Number.MIN_SAFE_INTEGER;
  const frequency = [];
  for (let index = 0; index < array.length; index++) {
    if (array[index] > max) {
      max = array[index];
    }
  }
  for (let index = 0; index < max; index++) {
    frequency.push(0);
  }
  for (let index = 0; index < array.length; index++) {
    frequency[array[index]] += 1;
  }
  for (let index = 0; index < frequency.length; index++) {
    if (frequency[index] === 0 || frequency[index] === 1) {
      continue;
    }
    for (let j = 0; j < array.length; j++) {
      if (array[j] == index && frequency[index] > 1) {
        frequency[index]--;
        array.splice(j, 1);
      }
    }
  }

  return array;
}
export function clearDup2(array) {
  array = new Set(array);
  return array;
}
export function clearDup3(array) {
  // first index will always be returned so it is evaluated to true
  return array.filter((item, index) => array.indexOf(item) === index);
}
export function clearDup4(arr) {
  let unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}

export function clearDup5(arr) {
  let unique = arr.reduce(function (acc, curr) {
    if (!acc.includes(curr)) acc.push(curr);
    return acc;
  }, []);
  return unique;
}

export function clearDup6(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
