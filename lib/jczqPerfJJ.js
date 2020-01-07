/**
 * 竞彩足球 奖金优化 奖金范围计算
 */
import _ from 'lodash';
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

export default function genMinMax(groups) {
  let max = 0;
  let min = 0;
  groups = _.cloneDeep(groups);
  const raceKind = {}; // 每场比赛可能的结果
	groups.forEach(group => {
    // {
    //   1001: [3, 1],
    //   1002: [3],
    //   1003: [1],
    //   1004: [1]
    // }
		const raceMap = {};
		group.compose.forEach(match => {
			const spf = getSpf(match);
      raceMap[match.matchId] = spf.split('');
      if (raceKind[match.matchId]) {
        raceKind[match.matchId] = _.uniq([...raceKind[match.matchId], ...spf.split('')])
      } else {
        raceKind[match.matchId] = spf.split('');
      }
		});
    group.raceMap = raceMap;
  });
   // [ [{id: 1001, code: 3}, { id: 1002, code: 3 }, { id: 1003, code: 1}, { id: 1004, code: 1}], [...], [...] ]
   const composeList = genCompose(raceKind);

   composeList.forEach(compose => {
     // [{id: 1001, code: 3}, { id: 1002, code: 3 }, { id: 1003, code: 1}, { id: 1004, code: 1}]
     const prize = genPrize(compose, groups)

     if (prize > max) {
       max = prize;
     }
   })
   min = _.min(groups.map(group => group.count * group.rate * 2))
   return {
     min: min.toFixed(2),
     max: max.toFixed(2)
   }
}

function genPrize(compose, groups) {
  let total = 0;
  groups.forEach(group => {
    const newCompose = Array.isArray(compose) ? compose : [compose]
    const isMatch = genMatch(newCompose, group);
    if (isMatch) {
      total += group.rate * group.count * 2
    }
  })
  return total;
}

// function genMatch (compose, group) {
//   for(let i = 0; i < compose.length; i++) {
//     const { id, code}  = compose[i]
//     if(!group.raceMap[id] || !group.raceMap[id].includes(code)) {
//       return false
//     }
//   }
//   return true
// }
function genMatch(compose, group) {
  for (let i = 0; i < compose.length; i++) {
    const { id, code } = compose[i];
    if (group.raceMap[id] && !group.raceMap[id].includes(code)) {
      return false;
    }
  }
  return true;
}

function genCompose(raceKind) {
  let arr = []
  Object.keys(raceKind).forEach((key, index) => {
    arr[index] = raceKind[key].map(code => ({ code, id: key}))
  })
  // [ [{id: 1001, code: 3}, { id: 1001, code: 1}, { id: 1001, code: 0}], [...], [...] ]
  return doExchange(arr);
}

function getSpf(match) {
	// 主场+1 进行对比
	if (match.rate === 1) {
		zqCode['rqSheng'] = '31';
		zqCode['rqPing'] = '0';
		zqCode['rqFu'] = '0';
	}
	// 主场+N 进行对比
	if (match.rate > 1) {
		zqCode['rqSheng'] = '310';
		zqCode['rqPing'] = '0';
		zqCode['rqFu'] = '0';
	}
	// 主场-1 进行对比
	if (match.rate === -1) {
		zqCode['rqSheng'] = '3';
		zqCode['rqPing'] = '3';
		zqCode['rqFu'] = '10';
	}
	// 主场-N 进行对比
	if (match.rate < -1) {
		zqCode['rqSheng'] = '3';
		zqCode['rqPing'] = '3';
		zqCode['rqFu'] = '310';
	}
	return zqCode[match.chooseItem];
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
