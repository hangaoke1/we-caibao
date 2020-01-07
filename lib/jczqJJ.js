/**
 * 竞猜足球奖金
 * genPrizeStd(races, ways) --> { min: number, max: number}
 */
const groupMap = {
  '3x3': [2],
  '3x4': [2, 3],
  '4x4': [3],
  '4x5': [3, 4],
  '4x6': [2],
  '4x11': [2, 3, 4],
  '5x5': [4],
  '5x6': [4, 5],
  '5x10': [2],
  '5x16': [3, 4, 5],
  '5x20': [2, 3],
  '5x26': [2, 3, 4, 5],
  '6x6': [5],
  '6x7': [5, 6],
  '6x15': [2],
  '6x20': [3],
  '6x22': [4, 5, 6],
  '6x35': [2, 3],
  '6x42': [3, 4, 5, 6],
  '6x50': [2, 3, 4],
  '6x57': [2, 3, 4, 5, 6],
  '7x7': [6],
  '7x8': [6, 7],
  '7x21': [5],
  '7x35': [4],
  '7x120': [2, 3, 4, 5, 6, 7],
  '8x8': [7],
  '8x9': [7, 8],
  '8x28': [6],
  '8x56': [5],
  '8x70': [4],
  '8x247': [2, 3, 4, 5, 6, 7, 8]
};
/**
 * 获取混合过关注数
 * @param {array} races 选择的比赛
 * @param {string} way 选择混合串关方式
 */
export function genPrizeMix(races, way) {
  let prizeMax = [];
  let prizeMin = [];
  const raceCount = way.split('x')[0]; // 比赛场数
  const combinations = arrayCombine(races); // 所有比赛组合
  const chooseRaces = combinations.filter(item => item.length == raceCount);
  const ways = groupMap[way];

  chooseRaces.forEach(subRaces => {
    const res = genPrizeStd(subRaces, ways);
    prizeMax.push(res.max);
    prizeMin.push(res.min);
  });
  const max = prizeMax.reduce((total, item) => {
    return total + item;
  }, 0);
  let min = 0
  const minPovit = prizeMin.sort((a, b) => a - b)[0];
  for (let i = 0; i < prizeMin.length; i++) {
    if(prizeMin[i] === minPovit) {
      min += prizeMin[i]
    }
  }
  return {
    min,
    max
  };
}
var zqCode = {
  // 胜平负
  sheng: '3',
  ping: '1',
  fu: '0',
  rqSheng: '1',
  rqPing: '3',
  rqFu: '0',
  // 总进球
  t0: '1',
  t1: '30',
  t2: '310',
  t3: '30',
  t4: '310',
  t5: '30',
  t6: '310',
  t7: '310',
  // 半全场
  ss: '3',
  sp: '1',
  sf: '0',
  ps: '3',
  pp: '1',
  pf: '0',
  fs: '3',
  fp: '1',
  ff: '0',
  // 比分
  s10: '3',
  s20: '3',
  s21: '3',
  s30: '3',
  s31: '3',
  s32: '3',
  s40: '3',
  s41: '3',
  s42: '3',
  s50: '3',
  s51: '3',
  s52: '3',
  sother: '3',
  p00: '1',
  p11: '1',
  p22: '1',
  p33: '1',
  pother: '1',
  f01: '0',
  f02: '0',
  f03: '0',
  f04: '0',
  f05: '0',
  f12: '0',
  f13: '0',
  f14: '0',
  f15: '0',
  f23: '0',
  f24: '0',
  f25: '0',
  fother: '0'
};

// 标准过关 ways[2, 3, 4]
export function genPrizeStd(races, ways) {
  races.forEach(race => {
    race.betArr = [0, 0, 0];
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
      .map(item => race[item])
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
    // 主场+1 进行对比
    if (race.rate === 1) {
      zqCode['rqSheng'] = '31';
      zqCode['rqPing'] = '0';
      zqCode['rqFu'] = '0';
    }
    // 主场+N 进行对比
    if (race.rate > 1) {
      zqCode['rqSheng'] = '310';
      zqCode['rqPing'] = '0';
      zqCode['rqFu'] = '0';
    }
    // 主场-1 进行对比
    if (race.rate === -1) {
      zqCode['rqSheng'] = '3';
      zqCode['rqPing'] = '3';
      zqCode['rqFu'] = '10';
    }
    // 主场-N 进行对比
    if (race.rate < -1) {
      zqCode['rqSheng'] = '3';
      zqCode['rqPing'] = '3';
      zqCode['rqFu'] = '310';
    }

    // 不能简单的相加
    /**
     * 1. 胜平负 【2, 1, 1】
     * 2. 让球胜 【3, 5, 2】
     * 3. 半全场 【9, 1, 2】
     * 4. 总进球 【7, 5, 1】
     * 5. 比分   【2, 1, 8】
     */
    const betArrs = {
      spf: [[], [], []],
      rqSpf: [[], [], []],
      bqc: [[], [], []],
      zjq: [[], [], []],
      bf: [[], [], []]
    };

    race.choose.forEach(item => {
      const rate = +race[item];
      const codeArr = zqCode[item].split(''); // [3, 1, 0]

      const betMap = {
        // 胜平负
        sheng: 'spf',
        ping: 'spf',
        fu: 'spf',
        rqSheng: 'rqSpf',
        rqPing: 'rqSpf',
        rqFu: 'rqSpf',
        // 总进球
        t0: 'zjq',
        t1: 'zjq',
        t2: 'zjq',
        t3: 'zjq',
        t4: 'zjq',
        t5: 'zjq',
        t6: 'zjq',
        t7: 'zjq',
        // 半全场
        ss: 'bqc',
        sp: 'bqc',
        sf: 'bqc',
        ps: 'bqc',
        pp: 'bqc',
        pf: 'bqc',
        fs: 'bqc',
        fp: 'bqc',
        ff: 'bqc',
        // 比分
        s10: 'bf',
        s20: 'bf',
        s21: 'bf',
        s30: 'bf',
        s31: 'bf',
        s32: 'bf',
        s40: 'bf',
        s41: 'bf',
        s42: 'bf',
        s50: 'bf',
        s51: 'bf',
        s52: 'bf',
        sother: 'bf',
        p00: 'bf',
        p11: 'bf',
        p22: 'bf',
        p33: 'bf',
        pother: 'bf',
        f01: 'bf',
        f02: 'bf',
        f03: 'bf',
        f04: 'bf',
        f05: 'bf',
        f12: 'bf',
        f13: 'bf',
        f14: 'bf',
        f15: 'bf',
        f23: 'bf',
        f24: 'bf',
        f25: 'bf',
        fother: 'bf'
      };

      const group = betMap[item];
      const betArr = betArrs[group];

      codeArr.forEach(code => {

        // 胜
        if (Number(code) === 3) {
          betArr[0].push(rate);
        }
        // 平
        if (Number(code) === 1) {
          betArr[1].push(rate);
        }
        // 负
        if (Number(code) === 0) {
          betArr[2].push(rate);
        }
      });

    });
    
    Object.keys(betArrs).forEach(key => {
      const betArr = betArrs[key] // 二位数组  [ [胜] , [平], [负] ]

      // 计算一场比赛，胜 平 负三种情况的赔率
      race.betArr[0] += getMax(betArr[0])
      race.betArr[1] += getMax(betArr[1])
      race.betArr[2] += getMax(betArr[2])
    })

  });


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