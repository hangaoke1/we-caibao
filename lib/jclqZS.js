/**
 * 竞猜篮球注数
 */

/**
 * 获取标准过关注数量
 * @param {arrary} races 选择的比赛
 * @param {array} ways 选择过关方式 [2, 3]
 */
export function genCountStd(races, ways) {
  const map = genCountStdAll(races);
  let count = 0;
  ways.forEach(way => {
    count += map[way] || 0;
  });
  return count;
}

function genCountStdAll(races) {
  const combinations = arrayCombine(races);
  const combinationMap = {};
  const countMap = {};
  // 计算各关组合
  for (let i = 0; i < races.length; i++) {
    const index = i + 1;
    combinationMap[index] = combinations.filter(
      item => item.length === index
    );
    // 计算各关注数
    countMap[index] = combinationMap[index].reduce((total, item) => {
      return (
        total +
        item.reduce((subtotal, item) => {
          return subtotal * item.choose.length;
        }, 1)
      );
    }, 0);
  }
  return countMap;
}

/**
 * 获得指定数组的所有组合
 */
function arrayCombine(targetArr) {
  if (!targetArr || !targetArr.length) {
    return [];
  }

  var len = targetArr.length;
  var resultArrs = [];

  // 所有组合
  for (var n = 1; n < len; n++) {
    var flagArrs = getFlagArrs(len, n);
    while (flagArrs.length) {
      var flagArr = flagArrs.shift();
      var combArr = [];
      for (var i = 0; i < len; i++) {
        flagArr[i] && combArr.push(targetArr[i]);
      }
      resultArrs.push(combArr);
    }
  }
  resultArrs.push([...targetArr]);

  return resultArrs;
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
