import _0x2ddd70 from 'lodash';
var zqCode = {
    'sheng': '3',
    'ping': '1',
    'fu': '0',
    'rqSheng': '1',
    'rqPing': '3',
    'rqFu': '0',
    't0': '1',
    't1': '30',
    't2': '310',
    't3': '30',
    't4': '310',
    't5': '30',
    't6': '310',
    't7': '310',
    'ss': '3',
    'sp': '1',
    'sf': '0',
    'ps': '3',
    'pp': '1',
    'pf': '0',
    'fs': '3',
    'fp': '1',
    'ff': '0',
    's10': '3',
    's20': '3',
    's21': '3',
    's30': '3',
    's31': '3',
    's32': '3',
    's40': '3',
    's41': '3',
    's42': '3',
    's50': '3',
    's51': '3',
    's52': '3',
    'sother': '3',
    'p00': '1',
    'p11': '1',
    'p22': '1',
    'p33': '1',
    'pother': '1',
    'f01': '0',
    'f02': '0',
    'f03': '0',
    'f04': '0',
    'f05': '0',
    'f12': '0',
    'f13': '0',
    'f14': '0',
    'f15': '0',
    'f23': '0',
    'f24': '0',
    'f25': '0',
    'fother': '0'
};
export default function genMinMax(_0x5ec01d) {
    let _0x374e2d = 0x0;
    let _0x158270 = 0x0;
    _0x5ec01d = _0x2ddd70['cloneDeep'](_0x5ec01d);
    const _0x1eafd4 = {};
    _0x5ec01d['forEach'](_0x455f0a => {
        const _0x2ba6c1 = {};
        _0x455f0a['compose']['forEach'](_0x1fb97a => {
            const _0x473c82 = getSpf(_0x1fb97a);
            _0x2ba6c1[_0x1fb97a['matchId']] = _0x473c82['split']('');
            if (_0x1eafd4[_0x1fb97a['matchId']]) {
                _0x1eafd4[_0x1fb97a['matchId']] = _0x2ddd70['uniq']([
                    ..._0x1eafd4[_0x1fb97a['matchId']],
                    ..._0x473c82['split']('')
                ]);
            } else {
                _0x1eafd4[_0x1fb97a['matchId']] = _0x473c82['split']('');
            }
        });
        _0x455f0a['raceMap'] = _0x2ba6c1;
    });
    const _0x3d1b6 = genCompose(_0x1eafd4);
    _0x3d1b6['forEach'](_0x94214e => {
        const _0x22f82c = genPrize(_0x94214e, _0x5ec01d);
        if (_0x22f82c > _0x374e2d) {
            _0x374e2d = _0x22f82c;
        }
    });
    _0x158270 = _0x2ddd70['min'](_0x5ec01d['map'](_0x1b63fb => _0x1b63fb['count'] * _0x1b63fb['rate'] * 0x2));
    return {
        'min': _0x158270['toFixed'](0x2),
        'max': _0x374e2d['toFixed'](0x2)
    };
}
function genPrize(_0x44c1de, _0x4944a5) {
    let _0xb6a61c = 0x0;
    _0x4944a5['forEach'](_0x432d6a => {
        const _0x5ee3e7 = Array['isArray'](_0x44c1de) ? _0x44c1de : [_0x44c1de];
        const _0x5d718e = genMatch(_0x5ee3e7, _0x432d6a);
        if (_0x5d718e) {
            _0xb6a61c += _0x432d6a['rate'] * _0x432d6a['count'] * 0x2;
        }
    });
    return _0xb6a61c;
}
function genMatch(_0x26e047, _0x43826b) {
    for (let _0x55eeac = 0x0; _0x55eeac < _0x26e047['length']; _0x55eeac++) {
        const {id, code} = _0x26e047[_0x55eeac];
        if (_0x43826b['raceMap'][id] && !_0x43826b['raceMap'][id]['includes'](code)) {
            return ![];
        }
    }
    return !![];
}
function genCompose(_0x51f4f3) {
    let _0x608368 = [];
    Object['keys'](_0x51f4f3)['forEach']((_0x552650, _0x20071b) => {
        _0x608368[_0x20071b] = _0x51f4f3[_0x552650]['map'](_0x19b981 => ({
            'code': _0x19b981,
            'id': _0x552650
        }));
    });
    return doExchange(_0x608368);
}
function getSpf(_0x27378d) {
    if (_0x27378d['rate'] === 0x1) {
        zqCode['rqSheng'] = '31';
        zqCode['rqPing'] = '0';
        zqCode['rqFu'] = '0';
    }
    if (_0x27378d['rate'] > 0x1) {
        zqCode['rqSheng'] = '310';
        zqCode['rqPing'] = '0';
        zqCode['rqFu'] = '0';
    }
    if (_0x27378d['rate'] === -0x1) {
        zqCode['rqSheng'] = '3';
        zqCode['rqPing'] = '3';
        zqCode['rqFu'] = '10';
    }
    if (_0x27378d['rate'] < -0x1) {
        zqCode['rqSheng'] = '3';
        zqCode['rqPing'] = '3';
        zqCode['rqFu'] = '310';
    }
    return zqCode[_0x27378d['chooseItem']];
}
function doExchange(_0x4905a0) {
    var _0x4eb827 = _0x4905a0['length'];
    if (_0x4eb827 >= 0x2) {
        var _0x5f1ed4 = _0x4905a0[0x0]['length'];
        var _0x57b3f1 = _0x4905a0[0x1]['length'];
        var _0x4769c0 = _0x5f1ed4 * _0x57b3f1;
        var _0x4a3f2a = new Array(_0x4769c0);
        var _0x583b4a = 0x0;
        for (var _0x31bddc = 0x0; _0x31bddc < _0x5f1ed4; _0x31bddc++) {
            for (var _0x198b47 = 0x0; _0x198b47 < _0x57b3f1; _0x198b47++) {
                if (_0x4905a0[0x0][_0x31bddc] instanceof Array) {
                    _0x4a3f2a[_0x583b4a] = _0x4905a0[0x0][_0x31bddc]['concat'](_0x4905a0[0x1][_0x198b47]);
                } else {
                    _0x4a3f2a[_0x583b4a] = [_0x4905a0[0x0][_0x31bddc]]['concat'](_0x4905a0[0x1][_0x198b47]);
                }
                _0x583b4a++;
            }
        }
        var _0x1eb7a9 = new Array(_0x4eb827 - 0x1);
        for (var _0x31bddc = 0x2; _0x31bddc < _0x4905a0['length']; _0x31bddc++) {
            _0x1eb7a9[_0x31bddc - 0x1] = _0x4905a0[_0x31bddc];
        }
        _0x1eb7a9[0x0] = _0x4a3f2a;
        return doExchange(_0x1eb7a9);
    } else {
        return _0x4905a0[0x0];
    }
}