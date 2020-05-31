const groupMap = {
    '3x3': [0x2],
    '3x4': [
        0x2,
        0x3
    ],
    '4x4': [0x3],
    '4x5': [
        0x3,
        0x4
    ],
    '4x6': [0x2],
    '4x11': [
        0x2,
        0x3,
        0x4
    ],
    '5x5': [0x4],
    '5x6': [
        0x4,
        0x5
    ],
    '5x10': [0x2],
    '5x16': [
        0x3,
        0x4,
        0x5
    ],
    '5x20': [
        0x2,
        0x3
    ],
    '5x26': [
        0x2,
        0x3,
        0x4,
        0x5
    ],
    '6x6': [0x5],
    '6x7': [
        0x5,
        0x6
    ],
    '6x15': [0x2],
    '6x20': [0x3],
    '6x22': [
        0x4,
        0x5,
        0x6
    ],
    '6x35': [
        0x2,
        0x3
    ],
    '6x42': [
        0x3,
        0x4,
        0x5,
        0x6
    ],
    '6x50': [
        0x2,
        0x3,
        0x4
    ],
    '6x57': [
        0x2,
        0x3,
        0x4,
        0x5,
        0x6
    ],
    '7x7': [0x6],
    '7x8': [
        0x6,
        0x7
    ],
    '7x21': [0x5],
    '7x35': [0x4],
    '7x120': [
        0x2,
        0x3,
        0x4,
        0x5,
        0x6,
        0x7
    ],
    '8x8': [0x7],
    '8x9': [
        0x7,
        0x8
    ],
    '8x28': [0x6],
    '8x56': [0x5],
    '8x70': [0x4],
    '8x247': [
        0x2,
        0x3,
        0x4,
        0x5,
        0x6,
        0x7,
        0x8
    ]
};
export function genPrizeMix(_0x2dafb1, _0x514663) {
    let _0x23433a = [];
    let _0x5bb861 = [];
    const _0x501327 = _0x514663['split']('x')[0x0];
    const _0x23e67b = arrayCombine(_0x2dafb1);
    const _0x3f01ff = _0x23e67b['filter'](_0x1d42ac => _0x1d42ac['length'] == _0x501327);
    const _0x3aa7f5 = groupMap[_0x514663];
    _0x3f01ff['forEach'](_0x184016 => {
        const _0x3fdb2b = genPrizeStd(_0x184016, _0x3aa7f5);
        _0x23433a['push'](_0x3fdb2b['max']);
        _0x5bb861['push'](_0x3fdb2b['min']);
    });
    const _0x4fbfd0 = _0x23433a['reduce']((_0xaadf79, _0x54ce05) => {
        return _0xaadf79 + _0x54ce05;
    }, 0x0);
    let _0x3911f4 = 0x0;
    const _0x156403 = _0x5bb861['sort']((_0xd05525, _0x3fcf9c) => _0xd05525 - _0x3fcf9c)[0x0];
    for (let _0x30fb59 = 0x0; _0x30fb59 < _0x5bb861['length']; _0x30fb59++) {
        if (_0x5bb861[_0x30fb59] === _0x156403) {
            _0x3911f4 += _0x5bb861[_0x30fb59];
        }
    }
    return {
        'min': _0x3911f4,
        'max': _0x4fbfd0
    };
}
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
export function genPrizeStd(_0x4209c9, _0x21285b) {
    _0x4209c9['forEach'](_0x50b08c => {
        _0x50b08c['betArr'] = [
            0x0,
            0x0,
            0x0
        ];
    });
    const _0x155108 = _0x21285b['map'](_0x1ce34b => genPrizeSingle(_0x4209c9, _0x1ce34b));
    const _0x4b1862 = _0x155108['map'](_0x210150 => _0x210150['min'])['sort']((_0xa4faf0, _0x1861b0) => _0xa4faf0 - _0x1861b0)[0x0];
    const _0x15bf28 = _0x155108['map'](_0x419668 => _0x419668['max'])['reduce']((_0x519019, _0x449560) => _0x519019 + _0x449560, 0x0);
    return {
        'min': _0x4b1862,
        'max': _0x15bf28
    };
}
function genPrizeSingle(_0x314176, _0x5f4a93) {
    const _0x16f54e = delRaces(JSON['parse'](JSON['stringify'](_0x314176)));
    const _0x3110e6 = selectMax(_0x16f54e);
    const _0x177d00 = selectMin(_0x16f54e);
    const _0x4f297e = genMin(_0x177d00, _0x5f4a93) * 0x2;
    const _0x250750 = genMax(_0x3110e6, _0x5f4a93) * 0x2;
    return {
        'min': _0x4f297e,
        'max': _0x250750
    };
}
function genMax(_0x2f247b, _0x4b6cee) {
    const _0x3e028c = arrayCombine(_0x2f247b)['filter'](_0x5f2774 => _0x5f2774['length'] === _0x4b6cee);
    const _0x56ce27 = _0x3e028c['reduce']((_0x577e37, _0x1d8f85) => {
        return _0x577e37 += _0x1d8f85['reduce']((_0xd6d0b1, _0x4c7514) => _0xd6d0b1 * _0x4c7514, 0x1);
    }, 0x0);
    return _0x56ce27;
}
function genMin(_0x1f1b0a, _0x59e889) {
    const _0x226f01 = _0x1f1b0a['sort']((_0x2a2414, _0x111793) => _0x2a2414 - _0x111793)['slice'](0x0, _0x59e889);
    return _0x226f01['reduce']((_0x438783, _0x331794) => _0x438783 * _0x331794, 0x1);
}
function selectMin(_0x7fcc9) {
    const _0x13a369 = _0x7fcc9['map'](_0x1898c8 => {
        return _0x1898c8['choose']['map'](_0x157f7f => _0x1898c8[_0x157f7f])['filter'](_0x3e196c => _0x3e196c !== 0x0)['sort']((_0x1230e1, _0x5beba9) => _0x1230e1 - _0x5beba9)[0x0];
    });
    return _0x13a369;
}
function selectMax(_0x5e237f) {
    const _0x4e63ca = _0x5e237f['map'](_0x169def => {
        return _0x169def['betArr']['sort']((_0x317f9e, _0x59ff36) => _0x59ff36 - _0x317f9e)[0x0];
    });
    return _0x4e63ca;
}
function delRaces(_0xa118b5) {
    _0xa118b5['forEach'](_0x291dd6 => {
        if (_0x291dd6['rate'] === 0x1) {
            zqCode['rqSheng'] = '31';
            zqCode['rqPing'] = '0';
            zqCode['rqFu'] = '0';
        }
        if (_0x291dd6['rate'] > 0x1) {
            zqCode['rqSheng'] = '310';
            zqCode['rqPing'] = '0';
            zqCode['rqFu'] = '0';
        }
        if (_0x291dd6['rate'] === -0x1) {
            zqCode['rqSheng'] = '3';
            zqCode['rqPing'] = '3';
            zqCode['rqFu'] = '10';
        }
        if (_0x291dd6['rate'] < -0x1) {
            zqCode['rqSheng'] = '3';
            zqCode['rqPing'] = '3';
            zqCode['rqFu'] = '310';
        }
        const _0x292397 = {
            'spf': [
                [],
                [],
                []
            ],
            'rqSpf': [
                [],
                [],
                []
            ],
            'bqc': [
                [],
                [],
                []
            ],
            'zjq': [
                [],
                [],
                []
            ],
            'bf': [
                [],
                [],
                []
            ]
        };
        _0x291dd6['choose']['forEach'](_0x596217 => {
            const _0x4d9497 = +_0x291dd6[_0x596217];
            const _0x3b5367 = zqCode[_0x596217]['split']('');
            const _0x3a6716 = {
                'sheng': 'spf',
                'ping': 'spf',
                'fu': 'spf',
                'rqSheng': 'rqSpf',
                'rqPing': 'rqSpf',
                'rqFu': 'rqSpf',
                't0': 'zjq',
                't1': 'zjq',
                't2': 'zjq',
                't3': 'zjq',
                't4': 'zjq',
                't5': 'zjq',
                't6': 'zjq',
                't7': 'zjq',
                'ss': 'bqc',
                'sp': 'bqc',
                'sf': 'bqc',
                'ps': 'bqc',
                'pp': 'bqc',
                'pf': 'bqc',
                'fs': 'bqc',
                'fp': 'bqc',
                'ff': 'bqc',
                's10': 'bf',
                's20': 'bf',
                's21': 'bf',
                's30': 'bf',
                's31': 'bf',
                's32': 'bf',
                's40': 'bf',
                's41': 'bf',
                's42': 'bf',
                's50': 'bf',
                's51': 'bf',
                's52': 'bf',
                'sother': 'bf',
                'p00': 'bf',
                'p11': 'bf',
                'p22': 'bf',
                'p33': 'bf',
                'pother': 'bf',
                'f01': 'bf',
                'f02': 'bf',
                'f03': 'bf',
                'f04': 'bf',
                'f05': 'bf',
                'f12': 'bf',
                'f13': 'bf',
                'f14': 'bf',
                'f15': 'bf',
                'f23': 'bf',
                'f24': 'bf',
                'f25': 'bf',
                'fother': 'bf'
            };
            const _0xcbf8ab = _0x3a6716[_0x596217];
            const _0x16d070 = _0x292397[_0xcbf8ab];
            _0x3b5367['forEach'](_0x5e6fb5 => {
                if (Number(_0x5e6fb5) === 0x3) {
                    _0x16d070[0x0]['push'](_0x4d9497);
                }
                if (Number(_0x5e6fb5) === 0x1) {
                    _0x16d070[0x1]['push'](_0x4d9497);
                }
                if (Number(_0x5e6fb5) === 0x0) {
                    _0x16d070[0x2]['push'](_0x4d9497);
                }
            });
        });
        Object['keys'](_0x292397)['forEach'](_0x4fe32f => {
            const _0x41440d = _0x292397[_0x4fe32f];
            _0x291dd6['betArr'][0x0] += getMax(_0x41440d[0x0]);
            _0x291dd6['betArr'][0x1] += getMax(_0x41440d[0x1]);
            _0x291dd6['betArr'][0x2] += getMax(_0x41440d[0x2]);
        });
    });
    return _0xa118b5;
}
function getMax(_0x2b67a5) {
    if (_0x2b67a5['length'] === 0x0)
        return 0x0;
    return _0x2b67a5['sort']((_0x78ab2b, _0x3a86ab) => _0x3a86ab - _0x78ab2b)[0x0];
}
function arrayCombine(_0x3548a6) {
    if (!_0x3548a6 || !_0x3548a6['length']) {
        return [];
    }
    var _0x3e1175 = _0x3548a6['length'];
    var _0x26945f = [];
    for (var _0x15d79d = 0x1; _0x15d79d < _0x3e1175; _0x15d79d++) {
        var _0x59ee04 = getFlagArrs(_0x3e1175, _0x15d79d);
        while (_0x59ee04['length']) {
            var _0x56074d = _0x59ee04['shift']();
            var _0x296213 = [];
            for (var _0x2e6462 = 0x0; _0x2e6462 < _0x3e1175; _0x2e6462++) {
                _0x56074d[_0x2e6462] && _0x296213['push'](_0x3548a6[_0x2e6462]);
            }
            _0x26945f['push'](_0x296213);
        }
    }
    _0x26945f['push']([..._0x3548a6]);
    return _0x26945f;
}
function getFlagArrs(_0x4c26c6, _0x4e561a) {
    if (_0x4c26c6 == _0x4e561a) {
        return [new Array(_0x4c26c6)['fill'](0x1)];
    }
    if (!_0x4e561a || _0x4e561a < 0x1) {
        return [];
    }
    var _0x2cbc13 = [], _0x4ed628 = [], _0x164363 = ![], _0x3b0145, _0x42ed23, _0x29a20d;
    for (_0x3b0145 = 0x0; _0x3b0145 < _0x4c26c6; _0x3b0145++) {
        _0x4ed628[_0x3b0145] = _0x3b0145 < _0x4e561a ? 0x1 : 0x0;
    }
    _0x2cbc13['push'](_0x4ed628['concat']());
    while (!_0x164363) {
        _0x29a20d = 0x0;
        for (_0x3b0145 = 0x0; _0x3b0145 < _0x4c26c6 - 0x1; _0x3b0145++) {
            if (_0x4ed628[_0x3b0145] == 0x1 && _0x4ed628[_0x3b0145 + 0x1] == 0x0) {
                for (_0x42ed23 = 0x0; _0x42ed23 < _0x3b0145; _0x42ed23++) {
                    _0x4ed628[_0x42ed23] = _0x42ed23 < _0x29a20d ? 0x1 : 0x0;
                }
                _0x4ed628[_0x3b0145] = 0x0;
                _0x4ed628[_0x3b0145 + 0x1] = 0x1;
                var _0x2c8e8c = _0x4ed628['concat']();
                _0x2cbc13['push'](_0x2c8e8c);
                if (_0x2c8e8c['slice'](-_0x4e561a)['join']('')['indexOf']('0') == -0x1) {
                    _0x164363 = !![];
                }
                break;
            }
            _0x4ed628[_0x3b0145] == 0x1 && _0x29a20d++;
        }
    }
    return _0x2cbc13;
}