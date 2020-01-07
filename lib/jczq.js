// code ---> {key, name}
export const map = {
  // 胜平负
  3: {
    key: 'sheng',
    name: '胜'
  },
  1: {
    key: 'ping',
    name: '平'
  },
  0: {
    key: 'fu',
    name: '负'
  },
  // 让球胜平负
  403: {
    key: 'rqSheng',
    name: '让球胜'
  },
  401: {
    key: 'rqPing',
    name: '让球平'
  },
  400: {
    key: 'rqFu',
    name: '让球负'
  },
  // 胜比分
  210: {
    key: 's10',
    name: '1:0'
  },
  220: {
    key: 's20',
    name: '2:0'
  },
  221: {
    key: 's21',
    name: '2:1'
  },
  230: {
    key: 's30',
    name: '3:0'
  },
  231: {
    key: 's31',
    name: '3:1'
  },
  232: {
    key: 's32',
    name: '3:2'
  },
  240: {
    key: 's40',
    name: '4:0'
  },
  241: {
    key: 's41',
    name: '4:1'
  },
  242: {
    key: 's42',
    name: '4:2'
  },
  250: {
    key: 's50',
    name: '5:0'
  },
  251: {
    key: 's51',
    name: '5:1'
  },
  252: {
    key: 's52',
    name: '5:2'
  },
  290: {
    key: 'sother',
    name: '胜其他'
  },
  // 平比分
  200: {
    key: 'p00',
    name: '0:0'
  },
  211: {
    key: 'p11',
    name: '1:1'
  },
  222: {
    key: 'p22',
    name: '2:2'
  },
  233: {
    key: 'p33',
    name: '3:3'
  },
  299: {
    key: 'pother',
    name: '平其他'
  },
  // 负比分
  201: {
    key: 'f01',
    name: '0:1'
  },
  202: {
    key: 'f02',
    name: '0:2'
  },
  212: {
    key: 'f12',
    name: '1:2'
  },
  203: {
    key: 'f03',
    name: '0:3'
  },
  213: {
    key: 'f13',
    name: '1:3'
  },
  223: {
    key: 'f23',
    name: '2:3'
  },
  204: {
    key: 'f04',
    name: '0:4'
  },
  214: {
    key: 'f14',
    name: '1:4'
  },
  224: {
    key: 'f24',
    name: '2:4'
  },
  205: {
    key: 'f05',
    name: '0:5'
  },
  215: {
    key: 'f15',
    name: '1:5'
  },
  225: {
    key: 'f25',
    name: '2:5'
  },
  209: {
    key: 'fother',
    name: '负其他'
  },
  // 总进球
  100: {
    key: 't0',
    name: '0球'
  },
  101: {
    key: 't1',
    name: '1球'
  },
  102: {
    key: 't2',
    name: '2球'
  },
  103: {
    key: 't3',
    name: '3球'
  },
  104: {
    key: 't4',
    name: '4球'
  },
  105: {
    key: 't5',
    name: '5球'
  },
  106: {
    key: 't6',
    name: '6球'
  },
  107: {
    key: 't7',
    name: '7球+'
  },
  // 半全场
  333: {
    key: 'ss',
    name: '胜胜'
  },
  331: {
    key: 'sp',
    name: '胜平'
  },
  330: {
    key: 'sf',
    name: '胜负'
  },
  313: {
    key: 'ps',
    name: '平胜'
  },
  311: {
    key: 'pp',
    name: '平平'
  },
  310: {
    key: 'pf',
    name: '平负'
  },
  303: {
    key: 'fs',
    name: '负胜'
  },
  301: {
    key: 'fp',
    name: '负平'
  },
  300: {
    key: 'ff',
    name: '负负'
  }
};


// key ---> code
export const key2code = (function () {
  let obj = {}
  Object.keys(map).forEach(key => {
    const val = map[key];
    obj[val.key] = key
  })
  return obj
})()

export const key2name = (function() {
  let obj = {}
  Object.keys(map).forEach(key => {
    const val = map[key];
    obj[val.key] = val.name
  })
  return obj
}())

export const limitMap = {
  // 胜平负
  sheng: 8,
  ping: 8,
  fu: 8,
  rqSheng: 8,
  rqPing: 8,
  rqFu: 8,
  // 总进球
  t0: 6,
  t1: 6,
  t2: 6,
  t3: 6,
  t4: 6,
  t5: 6,
  t6: 6,
  t7: 6,
  // 半全场
  ss: 4,
  sp: 4,
  sf: 4,
  ps: 4,
  pp: 4,
  pf: 4,
  fs: 4,
  fp: 4,
  ff: 4,
  // 比分
  s10: 4,
  s20: 4,
  s21: 4,
  s30: 4,
  s31: 4,
  s32: 4,
  s40: 4,
  s41: 4,
  s42: 4,
  s50: 4,
  s51: 4,
  s52: 4,
  sother: 4,
  p00: 4,
  p11: 4,
  p22: 4,
  p33: 4,
  pother: 4,
  f01: 4,
  f02: 4,
  f03: 4,
  f04: 4,
  f05: 4,
  f12: 4,
  f13: 4,
  f14: 4,
  f15: 4,
  f23: 4,
  f24: 4,
  f25: 4,
  fother: 4
}

export const mixWayMap = {
  3: ['3x3', '3x4'],
  4: ['3x3', '3x4', '4x4', '4x5', '4x6', '4x11'],
  5: ['3x3', '3x4', '4x4', '4x5', '4x6', '4x11', '5x5', '5x6', '5x10', '5x16', '5x20', '5x26'],
  6: ['3x3', '3x4', '4x4', '4x5', '4x6', '4x11', '5x5', '5x6', '5x10', '5x16', '5x20', '5x26', '6x6', '6x7', '6x15', '6x20', '6x22', '6x35', '6x42', '6x50', '6x57'],
  7: ['3x3', '3x4', '4x4', '4x5', '4x6', '4x11', '5x5', '5x6', '5x10', '5x16', '5x20', '5x26', '6x6', '6x7', '6x15', '6x20', '6x22', '6x35', '6x42', '6x50', '6x57', '7x7', '7x8', '7x21', '7x35', '7x120'],
  8: ['3x3', '3x4', '4x4', '4x5', '4x6', '4x11', '5x5', '5x6', '5x10', '5x16', '5x20', '5x26', '6x6', '6x7', '6x15', '6x20', '6x22', '6x35', '6x42', '6x50', '6x57', '7x7', '7x8', '7x21', '7x35', '7x120', '8x8', '8x9', '8x28', '8x56', '8x70', '8x247']
}
