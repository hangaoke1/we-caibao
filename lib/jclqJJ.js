/**
 * 竞猜篮球奖金
 * genPrizeStd(races, ways) --> { min: number, max: number}
 */

var lqCode = {
  "fu": "0",
  "sheng": "3",
  "rfsheng": "30",
  "rffu": "30",
  "x": "30",
  "d": "30",
  "h15": "3",
  "h610": "3",
  "h1115": "3",
  "h1620": "3",
  "h2125": "3",
  "h26": "3",
  "g15": "0",
  "g610": "0",
  "g1115": "0",
  "g1620": "0",
  "g2125": "0",
  "g26": "0"
};

// 标准过关 ways[2, 3, 4]
export function genPrizeStd(races, ways) {
  races.forEach(race => {
    race.betArr = [0, 0];
  });
  const res = ways.map(way => genPrizeSingle(races, way));
  const min = res.map(item => item.min).sort((a, b) => a - b)[0];
  const max = res
    .map(item => item.max)
    .reduce((total, val) => total + val, 0);
  return {
    min,
    max
  };
}

function genPrizeSingle(races, way) {
  const newRaces = delRaces(JSON.parse(JSON.stringify(races)));
  const maxArr = selectMax(newRaces);
  const minArr = selectMin(newRaces);
  const prizeMin = genMin(minArr, way) * 2;
  const prizeMax = genMax(maxArr, way) * 2;
  return {
    min: prizeMin,
    max: prizeMax
  };
}

function genMax(maxArr, way) {
  const groups = arrayCombine(maxArr).filter(group => group.length === way);
  const sum = groups.reduce((total, group) => {
    return (total += group.reduce((subTotal, rate) => subTotal * rate, 1));
  }, 0);
  return sum;
}

function genMin(minArr, way) {
  const rateMult = minArr.sort((a, b) => a - b).slice(0, way);
  return rateMult.reduce((total, item) => total * item, 1);
}

function selectMin(races) {
  // 注意判0
  const minArr = races.map(race => {
    return race.choose
      .map(item => race.sp[item])
      .filter(rate => rate !== 0)
      .sort((a, b) => a - b)[0];
  });
  return minArr;
}

function selectMax(races) {
  const maxArr = races.map(race => {
    return race.betArr.sort((a, b) => b - a)[0];
  });
  return maxArr;
}

function delRaces(races) {
  races.forEach(race => {
    const betArrs = {
      sf: [[], []], // 胜负
      rfSf: [[], []], // 让分胜负
      dx: [[], []], // 大小
      zs: [[], []], // 主胜
      ks: [[], []]  // 客胜
    };

    race.choose.forEach(chooseItem => {
      const rate = race.sp[chooseItem]
      const codeArr = lqCode[chooseItem].split(''); // [3, 0]
      const betMap = {
        "fu": "sf",
        "sheng": "sf",
        "rfsheng": "rfSf",
        "rffu": "rfSf",
        "x": "dx",
        "d": "dx",
        "h15": "zs",
        "h610": "zs",
        "h1115": "zs",
        "h1620": "zs",
        "h2125": "zs",
        "h26": "zs",
        "g15": "ks",
        "g610": "ks",
        "g1115": "ks",
        "g1620": "ks",
        "g2125": "ks",
        "g26": "ks"
      };
      const group = betMap[chooseItem];
      const betArr = betArrs[group];
      codeArr.forEach(code => {
        // 胜
        if (Number(code) === 3) {
          betArr[0].push(rate);
        }
        // 负
        if (Number(code) === 0) {
          betArr[1].push(rate);
        }
      });
    })

    Object.keys(betArrs).forEach(key => {
      const betArr = betArrs[key] // 二位数组  [ [胜] , [负] ]

      // 计算一场比赛，胜 平 负三种情况的赔率
      race.betArr[0] += getMax(betArr[0])
      race.betArr[1] += getMax(betArr[1])
    })
  })

  return races;
}

function getMax(arr) {
  if (arr.length === 0) return 0
  return arr.sort((a,b) => b-a)[0]
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
