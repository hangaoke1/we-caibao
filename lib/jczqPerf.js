export default function genMatches(_0x2c4c17, _0x4a27ae) {
    let _0x264ab5 = JSON['parse'](JSON['stringify'](_0x2c4c17));
    let _0x2376de = arrayCombine(_0x264ab5)['filter'](_0xf0fae5 => _0xf0fae5['length'] === _0x4a27ae);
    let _0x4de872 = [];
    _0x2376de['forEach'](_0x2e74ee => {
        const _0x3b5f0d = _0x2e74ee['map'](_0x4189ee => {
            let _0x13a0a4 = [];
            _0x4189ee['choose']['forEach'](_0x4a97d5 => {
                _0x13a0a4['push'](Object['assign']({}, _0x4189ee, { 'chooseItem': _0x4a97d5 }));
            });
            return _0x13a0a4;
        });
        const _0x1cfd17 = doExchange(_0x3b5f0d);
        _0x4de872 = [
            ..._0x4de872,
            ..._0x1cfd17
        ];
    });
    return _0x4de872['map']((_0x572ca6, _0x49f4a2) => {
        if (!Array['isArray'](_0x572ca6)) {
            _0x572ca6 = [_0x572ca6];
        }
        return {
            'id': _0x49f4a2,
            'compose': _0x572ca6,
            'count': 0x1,
            'rate': _0x572ca6['reduce']((_0x2f459b, _0x8e76a1) => {
                return _0x2f459b * _0x8e76a1[_0x8e76a1['chooseItem']];
            }, 0x1)
        };
    });
}
function arrayCombine(_0xc262d9) {
    if (!_0xc262d9 || !_0xc262d9['length']) {
        return [];
    }
    var _0x431b0e = _0xc262d9['length'];
    var _0xcb0d17 = [];
    for (var _0x1418d2 = 0x1; _0x1418d2 < _0x431b0e; _0x1418d2++) {
        var _0x4aa35e = getFlagArrs(_0x431b0e, _0x1418d2);
        while (_0x4aa35e['length']) {
            var _0x4fa707 = _0x4aa35e['shift']();
            var _0x473b73 = [];
            for (var _0x4ddc33 = 0x0; _0x4ddc33 < _0x431b0e; _0x4ddc33++) {
                _0x4fa707[_0x4ddc33] && _0x473b73['push'](_0xc262d9[_0x4ddc33]);
            }
            _0xcb0d17['push'](_0x473b73);
        }
    }
    _0xcb0d17['push']([..._0xc262d9]);
    return _0xcb0d17;
}
function getFlagArrs(_0x391d7b, _0x5d179a) {
    if (_0x391d7b == _0x5d179a) {
        return [new Array(_0x391d7b)['fill'](0x1)];
    }
    if (!_0x5d179a || _0x5d179a < 0x1) {
        return [];
    }
    var _0x333c38 = [], _0x2a703b = [], _0xd52307 = ![], _0x3aaa07, _0x46ddea, _0x177223;
    for (_0x3aaa07 = 0x0; _0x3aaa07 < _0x391d7b; _0x3aaa07++) {
        _0x2a703b[_0x3aaa07] = _0x3aaa07 < _0x5d179a ? 0x1 : 0x0;
    }
    _0x333c38['push'](_0x2a703b['concat']());
    while (!_0xd52307) {
        _0x177223 = 0x0;
        for (_0x3aaa07 = 0x0; _0x3aaa07 < _0x391d7b - 0x1; _0x3aaa07++) {
            if (_0x2a703b[_0x3aaa07] == 0x1 && _0x2a703b[_0x3aaa07 + 0x1] == 0x0) {
                for (_0x46ddea = 0x0; _0x46ddea < _0x3aaa07; _0x46ddea++) {
                    _0x2a703b[_0x46ddea] = _0x46ddea < _0x177223 ? 0x1 : 0x0;
                }
                _0x2a703b[_0x3aaa07] = 0x0;
                _0x2a703b[_0x3aaa07 + 0x1] = 0x1;
                var _0x7ad075 = _0x2a703b['concat']();
                _0x333c38['push'](_0x7ad075);
                if (_0x7ad075['slice'](-_0x5d179a)['join']('')['indexOf']('0') == -0x1) {
                    _0xd52307 = !![];
                }
                break;
            }
            _0x2a703b[_0x3aaa07] == 0x1 && _0x177223++;
        }
    }
    return _0x333c38;
}
function doExchange(_0x505d4f) {
    var _0x49ffa4 = _0x505d4f['length'];
    if (_0x49ffa4 >= 0x2) {
        var _0x4e2c41 = _0x505d4f[0x0]['length'];
        var _0x572469 = _0x505d4f[0x1]['length'];
        var _0x41e9b8 = _0x4e2c41 * _0x572469;
        var _0x2dec6b = new Array(_0x41e9b8);
        var _0x7b60e = 0x0;
        for (var _0x5aefc7 = 0x0; _0x5aefc7 < _0x4e2c41; _0x5aefc7++) {
            for (var _0x5229d3 = 0x0; _0x5229d3 < _0x572469; _0x5229d3++) {
                if (_0x505d4f[0x0][_0x5aefc7] instanceof Array) {
                    _0x2dec6b[_0x7b60e] = _0x505d4f[0x0][_0x5aefc7]['concat'](_0x505d4f[0x1][_0x5229d3]);
                } else {
                    _0x2dec6b[_0x7b60e] = [_0x505d4f[0x0][_0x5aefc7]]['concat'](_0x505d4f[0x1][_0x5229d3]);
                }
                _0x7b60e++;
            }
        }
        var _0x447e89 = new Array(_0x49ffa4 - 0x1);
        for (var _0x5aefc7 = 0x2; _0x5aefc7 < _0x505d4f['length']; _0x5aefc7++) {
            _0x447e89[_0x5aefc7 - 0x1] = _0x505d4f[_0x5aefc7];
        }
        _0x447e89[0x0] = _0x2dec6b;
        return doExchange(_0x447e89);
    } else {
        return _0x505d4f[0x0];
    }
}