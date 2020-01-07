/**
 * 竞猜足球注数
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
export function genCountMix(races, way) {
	let count = 0;
	const raceCount = way.split('x')[0]; // 比赛场数
	const combinations = arrayCombine(races); // 所有比赛组合
	const chooseRaces = combinations.filter(item => item.length == raceCount);
	const ways = groupMap[way];

	chooseRaces.forEach(subRaces => {
		count += genCountStd(subRaces, ways);
	});

	return count;
}

/**
 * 获取标准过关注数
 * @param {array} races 选择的比赛
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
		combinationMap[index] = combinations.filter(item => item.length === index);
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
