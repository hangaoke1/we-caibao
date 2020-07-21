export function genFrontNums() {
  const arr = [];
  for (let i = 0; i < 35; i++) {
    const j = i + 1;
    if (j >= 10) {
      arr.push('' + j);
    } else {
      arr.push('0' + j);
    }
  }
  return arr;
}
export function genBackNums() {
  const arr = [];
  for (let i = 0; i < 12; i++) {
    const j = i + 1;
    if (j >= 10) {
      arr.push('' + j);
    } else {
      arr.push('0' + j);
    }
  }
  return arr;
}

export function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
  while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(min);
}
