// 竞彩足球奖金优化

// 获取优化后数据
// data = selectRaces ways=3
export default function genMatches(data, ways) {
  
  let matches = JSON.parse(JSON.stringify(data));

  // 测试模式简化数据
  // matches = matches.map(item => ({ id: item.id, choose: item.choose }));

  let group = arrayCombine(matches).filter(arr => arr.length === ways);
  
  let newMatches = []
  
  // [[{}]] 单
  // [[{}, {}, {}], [{}, {}, {}]] 串
  group.forEach(arr => {
    // [{}, {}, {}] ---> [ [{}, {}, {}], [{}, {}], [{}]] 选项抽离，每场比赛只对应一个选项
    // [{}] ---> [[{}, {}, {}]]
    const newArr = arr.map(match => {
      let tmp = []
      match.choose.forEach(chooseItem => {
        tmp.push(Object.assign({}, match, {
          chooseItem
        }))
      })
      return tmp
    })

    const composes = doExchange(newArr);
    newMatches = [...newMatches, ...composes]
  })
 

  return newMatches.map((compose, index) => {
    if (!Array.isArray(compose)) {
      compose = [compose]
    }
    return {
      id: index,
      compose, // 串子组合
      count: 1, // 注数
      rate: compose.reduce((total, match) => {
        return total * match[match.chooseItem];
      }, 1) // 赔率
    }
  })
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

function doExchange(arr) {
  var len = arr.length;
  // 当数组大于等于2个的时候
  if (len >= 2) {
    // 第一个数组的长度
    var len1 = arr[0].length;
    // 第二个数组的长度
    var len2 = arr[1].length;
    // 2个数组产生的组合数
    var lenBoth = len1 * len2;
    //  申明一个新数组
    var items = new Array(lenBoth);
    // 申明新数组的索引
    var index = 0;
    for (var i = 0; i < len1; i++) {
      for (var j = 0; j < len2; j++) {
        if (arr[0][i] instanceof Array) {
          items[index] = arr[0][i].concat(arr[1][j]);
        } else {
          items[index] = [arr[0][i]].concat(arr[1][j]);
        }
        index++;
      }
    }
    var newArr = new Array(len - 1);
    for (var i = 2; i < arr.length; i++) {
      newArr[i - 1] = arr[i];
    }
    newArr[0] = items;
    return doExchange(newArr);
  } else {
    return arr[0];
  }
}
