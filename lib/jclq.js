// code -> { key, name }
export const map = {
  // 胜负
  0: {
    key: 'fu',
    name: '主负'
  },
  3: {
    key: 'sheng',
    name: '主胜'
  },
  // 让分
  100: {
    key: 'rffu',
    name: '让主负'
  },
  103: {
    key: 'rfsheng',
    name: '让主胜'
  },
  // 大小
  201: {
    key: 'd',
    name: '大于'
  },
  202: {
    key: 'x',
    name: '小于'
  },
  // 主胜 分差
  301: {
    key: 'h15',
    name: '1-5'
  },
  302: {
    key: 'h610',
    name: '6-10'
  },
  303: {
    key: 'h1115',
    name: '11-15'
  },
  304: {
    key: 'h1620',
    name: '16-20'
  },
  305: {
    key: 'h2125',
    name: '21-25'
  },
  306: {
    key: 'h26',
    name: '26+'
  },
  // 客胜 分差
  311: {
    key: 'g15',
    name: '1-5'
  },
  312: {
    key: 'g610',
    name: '6-10'
  },
  313: {
    key: 'g1115',
    name: '11-15'
  },
  314: {
    key: 'g1620',
    name: '16-20'
  },
  315: {
    key: 'g2125',
    name: '21-25'
  },
  316: {
    key: 'g26',
    name: '26+'
  }
}

// key ---> code
export const key2code = (function () {
  let obj = {}
  Object.keys(map).forEach(key => {
    const val = map[key];
    obj[val.key] = key
  })
  return obj
})()

// key ---> name
export const key2name = (function(){
  let obj = {}
  Object.keys(map).forEach(key => {
    const val = map[key];
    obj[val.key] = val.name;
  })
  return obj
})()

export const limitMap = {
  fu: 8,
  sheng: 8,
  rffu: 8,
  rfsheng: 8,
  d: 8,
  x: 8,
  h15: 4,
  h610: 4,
  h1115: 4,
  h1620: 4,
  h2125: 4,
  h26: 4,
  g15: 4,
  g610: 4,
  g1115: 4,
  g1620: 4,
  g2125: 4,
  g26: 4
}

export const code2PrizeName = {
  0: '主负',
  3: '主胜',
  100: '让分主负',
  103: '让分主胜',
  201: '大',
  202: '小',
  311: '客胜1-5',
  312: '客胜6-10',
  313: '客胜11-15',
  314: '客胜16-20',
  315: '客胜21-25',
  316: '客胜26+',
  301: '主胜1-5',
  302: '主胜6-10',
  303: '主胜11-15',
  304: '主胜16-20',
  305: '主胜21-25',
  306: '主胜26+'
}