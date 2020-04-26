/**
 * 获取11选5任选单注最高奖金
 * @param {string} type 类型 1, 2, 3, 4, 5, 6, 7, 8
 * @param {array} numbers 号码 
 */
export function get11x5Prize(type, numbers) {
  const numLen = numbers.length > 5 ? 5 : numbers.length
  if (numbers.length < type) { return 0 }
  if (type == '1') { return 13 }
  if (type == '2') {
    const len = getFlagArrs(numLen, 2).length
    return len * 6
  }
  if (type == '3') {
    const len = getFlagArrs(numLen, 3).length
    return len * 19
  }
  if (type == '4') {
    const len = getFlagArrs(numLen, 4).length
    return len * 78
  }
  if (type == '5') { return 540 }
  if (type == '6') { return 90 }
  if (type == '7') { return 26 }
  if (type == '8') { return 9 }
}

/**
 * 获得从m中取n的所有组合
 */
function getFlagArrs(m, n) {
  if (m == n) {
    return [new Array(m).fill(1)];
  }
  if (!n || n < 1) {
    return [];
  }

  var resultArrs = [],
    flagArr = [],
    isEnd = false,
    i,
    j,
    leftCnt;

  for (i = 0; i < m; i++) {
    flagArr[i] = i < n ? 1 : 0;
  }

  resultArrs.push(flagArr.concat());

  while (!isEnd) {
    leftCnt = 0;
    for (i = 0; i < m - 1; i++) {
      if (flagArr[i] == 1 && flagArr[i + 1] == 0) {
        for (j = 0; j < i; j++) {
          flagArr[j] = j < leftCnt ? 1 : 0;
        }
        flagArr[i] = 0;
        flagArr[i + 1] = 1;
        var aTmp = flagArr.concat();
        resultArrs.push(aTmp);
        if (
          aTmp
            .slice(-n)
            .join('')
            .indexOf('0') == -1
        ) {
          isEnd = true;
        }
        break;
      }
      flagArr[i] == 1 && leftCnt++;
    }
  }
  return resultArrs;
}


// console.log('任选1', get11x5Prize(1, [1]))
// console.log('任选2', get11x5Prize(2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))
// console.log('任选3', get11x5Prize(3, [1, 2, 3]))
// console.log('任选4', get11x5Prize(4, [1, 2, 3, 4]))
// console.log('任选5', get11x5Prize(5, [1, 2, 3, 4, 5]))
// console.log('任选6', get11x5Prize(6, [1, 2, 3, 4, 5 , 6]))
// console.log('任选7', get11x5Prize(7, [1, 2, 3, 4, 5, 6, 7]))
// console.log('任选8', get11x5Prize(8, [1, 2, 3, 4, 5, 6, 7, 8]))