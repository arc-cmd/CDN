function show_history(_0x344785) {
    var _0x4cbd04 = {
        'USRHL': function(_0x3a7d33, _0x4ee368) {
            return _0x3a7d33(_0x4ee368);
        },
        'DMgSo': '.popup-notice',
        'wQYvF': 'none',
        'uqnUO': 'open',
        'XJotI': '.downtab-list',
        'CBVwZ': 'selected',
        'gDeum': '.module-tab-items',
        'uUkBN': '.module-tab-value',
        'ricBF': function(_0x42f94d, _0x4133f5) {
            return _0x42f94d(_0x4133f5);
        },
        'SPNNL': 'mac_history_dianying',
        'gCFGy': function(_0x31fdd3, _0x24c35d) {
            return _0x31fdd3 != _0x24c35d;
        },
        'WCqCm': 'YOxUU',
        'UMGWD': function(_0x133103, _0x5ef1e1) {
            return _0x133103 < _0x5ef1e1;
        },
        'TsQFl': 'dCFad',
        'siQNx': function(_0x423ee1, _0x4df543) {
            return _0x423ee1 + _0x4df543;
        },
        'WQbQk': function(_0x2dcb15, _0x1d4345) {
            return _0x2dcb15 + _0x1d4345;
        },
        'vFAEW': function(_0x3e2a31, _0x25321f) {
            return _0x3e2a31 + _0x25321f;
        },
        'XnFhl': function(_0xcf9464, _0x119fec) {
            return _0xcf9464 + _0x119fec;
        },
        'skvRA': function(_0x57cd80, _0x1acb72) {
            return _0x57cd80 + _0x1acb72;
        },
        'EyHEW': function(_0x441ef0, _0x36ddd1) {
            return _0x441ef0 + _0x36ddd1;
        },
        'rdyQj': '<li class="list-item"><a href="',
        'vSzvG': '" title="',
        'cBaSA': '" class="list-item-link"><i class="icon-play"></i><span>',
        'RKxMl': '</span>',
        'tsRMk': '</a></li>',
        'ryabJ': '<li class="drop-tips">暂无观影历史</li>',
        'nhkTX': '#history'
    };
    var _0x464ab1 = $['cookie'](_0x4cbd04['SPNNL']);
    var _0x29fad7 = [];
    var _0x257263 = '';
    if (_0x464ab1 != undefined && _0x4cbd04['gCFGy'](_0x464ab1, '')) {
        _0x29fad7 = eval(_0x464ab1);
    }
    if (_0x29fad7['length'] > 0x0) {
        if ('aRIIP' === _0x4cbd04['WCqCm']) {
            _0x4cbd04['USRHL']($, _0x4cbd04['DMgSo'])['removeClass'](_0x4cbd04['wQYvF'])['addClass'](_0x4cbd04['uqnUO']);
        } else {
            for (var _0x827fc9 = 0x0; _0x4cbd04['UMGWD'](_0x827fc9, _0x29fad7['length']); _0x827fc9++) {
                if ('ythQo' !== _0x4cbd04['TsQFl']) {
                    _0x257263 += _0x4cbd04['siQNx'](_0x4cbd04['WQbQk'](_0x4cbd04['vFAEW'](_0x4cbd04['XnFhl'](_0x4cbd04['skvRA'](_0x4cbd04['skvRA'](_0x4cbd04['EyHEW'](_0x4cbd04['rdyQj'] + _0x29fad7[_0x827fc9]['vod_url'], _0x4cbd04['vSzvG']), _0x29fad7[_0x827fc9]['vod_name']), _0x4cbd04['cBaSA']), _0x29fad7[_0x827fc9]['vod_part']), _0x4cbd04['RKxMl']), _0x29fad7[_0x827fc9]['vod_name']), _0x4cbd04['tsRMk']);
                } else {
                    $(this)['addClass']('selected')['siblings']()['removeClass']('selected');
                    $(_0x4cbd04['XJotI'])['eq']($(this)['index']())['addClass'](_0x4cbd04['CBVwZ'])['siblings']()['removeClass'](_0x4cbd04['CBVwZ']);
                    $(this)['parents'](_0x4cbd04['gDeum'])['siblings']('.module-tab-name')['children'](_0x4cbd04['uUkBN'])['text'](_0x4cbd04['ricBF']($, this)['attr']('data-dropdown-value'));
                }
            }
        }
    } else {
        _0x257263 = _0x4cbd04['ryabJ'];
    }
    _0x4cbd04['ricBF']($, _0x4cbd04['nhkTX'])['append'](_0x257263);
}

function show_tip(_0x38a3d0) {
    var _0xf3846c = {
        'ISdGj': function(_0x338b27, _0x1b190f) {
            return _0x338b27(_0x1b190f);
        },
        'tZjvO': 'selected',
        'mOhtY': function(_0x331093, _0x1dbd7a) {
            return _0x331093(_0x1dbd7a);
        },
        'OrfEK': function(_0x26865b, _0x3cf430) {
            return _0x26865b(_0x3cf430);
        },
        'vUExN': '.downtab-list',
        'mRgXQ': function(_0x19c03d, _0x28b32e) {
            return _0x19c03d(_0x28b32e);
        },
        'iicWn': '.module-tab-items',
        'LUIuO': '.module-tab-value',
        'TvXBr': 'data-dropdown-value',
        'pfGys': function(_0x29e937, _0xd10517) {
            return _0x29e937(_0xd10517);
        },
        'GMUTE': '.module-tab-drop',
        'Ltmis': function(_0x5eafad, _0x2a4452) {
            return _0x5eafad === _0x2a4452;
        },
        'OWhFQ': 'xMqel',
        'mcdSq': '#shortcuts-info'
    };
    $('.shortcuts-box')['show']();
    $(_0xf3846c['mcdSq'])['html'](_0x38a3d0);
    setTimeout(function() {
        if (_0xf3846c['Ltmis']('nbQSz', _0xf3846c['OWhFQ'])) {
            if (!_0xf3846c['ISdGj']($, this)['hasClass'](_0xf3846c['tZjvO'])) {
                _0xf3846c['mOhtY']($, this)['addClass'](_0xf3846c['tZjvO'])['siblings']()['removeClass'](_0xf3846c['tZjvO']);
                _0xf3846c['OrfEK']($, _0xf3846c['vUExN'])['eq'](_0xf3846c['mRgXQ']($, this)['index']())['addClass'](_0xf3846c['tZjvO'])['siblings']()['removeClass'](_0xf3846c['tZjvO']);
                _0xf3846c['mRgXQ']($, this)['parents'](_0xf3846c['iicWn'])['siblings']('.module-tab-name')['children'](_0xf3846c['LUIuO'])['text'](_0xf3846c['mRgXQ']($, this)['attr'](_0xf3846c['TvXBr']));
            }
            _0xf3846c['pfGys']($, _0xf3846c['GMUTE'])['removeClass']('module-tab-drop');
        } else {
            $('.shortcuts-box')['fadeOut'](0x3e8);
        }
    }, 0x7d0);
}
$(function() {
    var _0x363748 = {
        'HqaSS': function(_0x5a16f0, _0x4ab542) {
            return _0x5a16f0 !== _0x4ab542;
        },
        'BXmuh': 'QjtKF',
        'ajGWC': 'BlQLa',
        'jDRFu': function(_0x205df0, _0x330301) {
            return _0x205df0(_0x330301);
        },
        'kgSLw': '.ac_wd,.search-btn',
        'wNsxO': 'search-focus',
        'KrSmD': '.ac_hot',
        'vrsnX': 'body',
        'sRpZc': function(_0x12bfbd, _0x4d75d0) {
            return _0x12bfbd(_0x4d75d0);
        },
        'bvvgA': 'none',
        'asqpz': 'mobile-open',
        'ArOHF': function(_0x1fb38b, _0x37bc55) {
            return _0x1fb38b(_0x37bc55);
        },
        'fcGqO': function(_0x28c376, _0x3ddb39) {
            return _0x28c376(_0x3ddb39);
        },
        'zLZSe': 'HWKiN',
        'nZwtr': function(_0x437529, _0xd640e8) {
            return _0x437529 == _0xd640e8;
        },
        'wjdWg': '#txtKeywords,.search-box,.nav-menu-search,.txtKeywords',
        'VYYEk': function(_0xc92ccc, _0x27e52b) {
            return _0xc92ccc != _0x27e52b;
        },
        'hoSZg': function(_0x10ddcf, _0x5aa9b7) {
            return _0x10ddcf === _0x5aa9b7;
        },
        'RPbAy': 'KcmDs',
        'czkqJ': '.nav-search',
        'HPXxR': 'block',
        'ofnYb': 'uKEeA',
        'PVzgF': 'selected',
        'MbLpW': function(_0x159d7d, _0x5ba0ae) {
            return _0x159d7d(_0x5ba0ae);
        },
        'uiiUj': '.lazyload',
        'mfleB': 'module-tab-drop',
        'eibPH': function(_0x2177a6, _0x5cd5fa) {
            return _0x2177a6(_0x5cd5fa);
        },
        'UGyIB': '.module-tab-items',
        'JCBrp': '.module-tab-value',
        'lvfzj': function(_0xa4fab1, _0x5816e8) {
            return _0xa4fab1(_0x5816e8);
        },
        'PDcue': 'JbrEq',
        'KOwXG': 'zYLCi',
        'IqvEW': function(_0x4c914d, _0xca2e87) {
            return _0x4c914d(_0xca2e87);
        },
        'QOitx': 'data-dropdown-value',
        'bcDBa': function(_0x100f3c, _0x26740f) {
            return _0x100f3c(_0x26740f);
        },
        'znzeG': '.module-tab-drop',
        'bBaKE': function(_0x47985b, _0x3f98d2) {
            return _0x47985b(_0x3f98d2);
        },
        'LolLN': '.tips-box',
        'xSOwJ': 'open',
        'NaZEx': '.popup-tips',
        'ScfMN': '.popup-report',
        'NFQED': '.popup',
        'RKvyk': '.module-tab',
        'rOarT': 'success',
        'METUg': 'error',
        'HRsMe': function(_0x5697cf, _0x254be4) {
            return _0x5697cf(_0x254be4);
        },
        'rSgnY': '地址复制成功，赶快分享给小伙伴吧！',
        'qILpr': '.module-sorttab',
        'GmArQ': function(_0x3ee212, _0x3d0fb3) {
            return _0x3ee212 !== _0x3d0fb3;
        },
        'mCtrk': 'dPnKv',
        'TYuzQ': 'desc asc',
        'TnvNU': function(_0x189bcc, _0x38c364) {
            return _0x189bcc(_0x38c364);
        },
        'cXkZR': function(_0x19ecd6, _0x295b77) {
            return _0x19ecd6(_0x295b77);
        },
        'TtCdw': function(_0x589b6e, _0xdaa6ae) {
            return _0x589b6e(_0xdaa6ae);
        },
        'ewcew': 'eNhKh',
        'yeCpz': '.content-text,.blurb-text,.more-content',
        'ZfNJj': function(_0x1999bf, _0x1936d5) {
            return _0x1999bf(_0x1936d5);
        },
        'oeHCB': '.shortcuts-box',
        'hvcIH': '#shortcuts-info',
        'jbEMu': function(_0x597261, _0x16fe58) {
            return _0x597261(_0x16fe58);
        },
        'ulJEK': function(_0x5cee37, _0x56eddb) {
            return _0x5cee37(_0x56eddb);
        },
        'vkGWS': 'jlBda',
        'wAgSY': 'mac_history_dianying',
        'bzSfP': '.mx-lrmenu',
        'CqwKI': function(_0xc945f4, _0x53012c, _0x17d044) {
            return _0xc945f4(_0x53012c, _0x17d044);
        },
        'vbsnI': 'mx-lrshow ',
        'AsQOe': function(_0x3d6afe, _0x3ee36b) {
            return _0x3d6afe(_0x3ee36b);
        },
        'DHRpe': '.moremeum',
        'aocAt': '分享信息复制成功，分享给好朋友一起看～',
        'TGPKL': function(_0x1886bd, _0x38c715) {
            return _0x1886bd(_0x38c715);
        },
        'LeHfQ': '下载地址复制成功',
        'LSYef': function(_0x156ad6, _0x58f94b) {
            return _0x156ad6(_0x58f94b);
        },
        'ESzlw': function(_0x41e984, _0x476e48) {
            return _0x41e984 !== _0x476e48;
        },
        'zNRNZ': 'JHLfD',
        'YJVyk': function(_0x1187ed, _0x597384) {
            return _0x1187ed(_0x597384);
        },
        'uciXQ': '<li class="drop-tips">暂无观影历史</li>',
        'KgmbH': function(_0x5e169d, _0x325159) {
            return _0x5e169d(_0x325159);
        },
        'OZRmG': function(_0x5e47c2, _0x4cd42a) {
            return _0x5e47c2(_0x4cd42a);
        },
        'HiAkv': '.ant-back-top',
        'xLMCp': 'jJBSh',
        'MOibm': 'Judws',
        'fowha': function(_0x47f9e8, _0x13d1f2) {
            return _0x47f9e8(_0x13d1f2);
        },
        'Rcjxq': '0px',
        'OtdRa': function(_0x234007, _0xd252d6) {
            return _0x234007 !== _0xd252d6;
        },
        'jBmOR': 'eQJCn',
        'XFlXf': function(_0x3ca2db) {
            return _0x3ca2db();
        },
        'RvxXX': function(_0x504f63, _0x86097a) {
            return _0x504f63(_0x86097a);
        },
        'negis': 'sporty',
        'LbBzu': function(_0x45c024, _0x2015c8) {
            return _0x45c024(_0x2015c8);
        },
        'VKjcO': function(_0x2bdaa7, _0x54ef38) {
            return _0x2bdaa7(_0x54ef38);
        },
        'WQhkQ': '.nav-menu-search',
        'QTflV': '.tab-item',
        'QGdec': '.close-btn',
        'MtpXY': function(_0x12cf2e, _0x2958f5) {
            return _0x12cf2e(_0x2958f5);
        },
        'epRYS': function(_0x38e234, _0x194869) {
            return _0x38e234(_0x194869);
        },
        'ULWgt': '.btn-report',
        'sHYPU': '.domain',
        'utZlR': function(_0xa7d8b3, _0xfbb5aa) {
            return _0xa7d8b3(_0xfbb5aa);
        },
        'UeyST': '.close-popup,.close-popup2',
        'QANVH': '.module-tab .module-tab-name',
        'PjDGb': function(_0x38b8fe, _0x37448b) {
            return _0x38b8fe(_0x37448b);
        },
        'bCUgp': function(_0xf415ac, _0x115d78) {
            return _0xf415ac(_0x115d78);
        },
        'AbRow': '.more-content',
        'fpJxK': '.historyclean',
        'jsOrB': 'click',
        'rtRmB': function(_0x4a267a, _0x463e2d) {
            return _0x4a267a(_0x463e2d);
        },
        'vyTXu': function(_0x3e325c, _0x29cd1e) {
            return _0x3e325c > _0x29cd1e;
        },
        'FxkYN': '.qrcode-img',
        'ghwRb': 'canvas',
        'YHEQN': '.share-btn',
        'UoLVR': function(_0x270ab8, _0x25fd8e) {
            return _0x270ab8 !== _0x25fd8e;
        },
        'tEIzQ': 'HkYdx',
        'RkDOB': 'aglbZ',
        'zpRTD': function(_0x460afa, _0x58f449) {
            return _0x460afa > _0x58f449;
        },
        'oKPdQ': '.copy',
        'dCopR': 'MkPiy',
        'CwzeA': 'OMCgi',
        'TjvrK': function(_0x32e74b, _0x420015) {
            return _0x32e74b(_0x420015);
        },
        'Vyqjd': function(_0x42171b, _0x2b8dbb) {
            return _0x42171b === _0x2b8dbb;
        },
        'aXWVV': 'QXPcV',
        'NHxDw': '.urlcopy',
        'AJOgJ': '%c 感谢你使用Mxone5.0模板',
        'tDpat': 'color:red;font-size:18px;',
        'oGGZD': '%c 搬运狗网站',
        'JTRAA': 'color:red;font-size:16px;',
        'VPhCy': ' http://www.banyundog.com',
        'iaMdg': '%c 购买地址: ',
        'zJtpg': ' http://www.banyundog.com/2450.html',
        'hvjzr': 'border:1px solid #e1e1e8; color:#1e73be;',
        'awwSU': '%c 加入群聊: ',
        'DPxfa': '点击链接加入群聊【搬运狗博客交流群】：https://jq.qq.com/?_wv=1027&k=859OpsJC',
        'wRJWQ': '836809823'
    };
    _0x363748['XFlXf'](show_history);
    _0x363748['RvxXX']($, _0x363748['uiiUj'])['lazyload']({
        'effect': 'fadeIn',
        'skip_invisible': ![],
        'event': _0x363748['negis'],
        'threshold': 0x1f4
    });
    _0x363748['LbBzu']($, '#txtKeywords,.txtKeywords')['focus'](function() {
        var _0x5dc6b5 = {
            'RMUrb': 'mac_history_dianying'
        };
        if (_0x363748['HqaSS'](_0x363748['BXmuh'], _0x363748['ajGWC'])) {
            _0x363748['jDRFu']($, _0x363748['kgSLw'])['addClass'](_0x363748['wNsxO']);
            _0x363748['jDRFu']($, _0x363748['KrSmD'])['removeClass']('none');
            $(_0x363748['vrsnX'])['addClass']('mobile-open');
        } else {
            $['cookie'](_0x5dc6b5['RMUrb'], null, {
                'expires': -0x1,
                'path': '/'
            });
            $['cookie']('vt', null, {
                'expires': -0x1,
                'path': '/player'
            });
            $['cookie']('vo', null, {
                'expires': -0x1,
                'path': '/player'
            });
            $['cookie']('ve', null, {
                'expires': -0x1,
                'path': '/player'
            });
        }
    });
    _0x363748['VKjcO']($, _0x363748['WQhkQ'])['click'](function() {
        _0x363748['sRpZc']($, _0x363748['kgSLw'])['addClass'](_0x363748['wNsxO']);
        _0x363748['sRpZc']($, _0x363748['KrSmD'])['removeClass'](_0x363748['bvvgA']);
        _0x363748['sRpZc']($, _0x363748['vrsnX'])['addClass'](_0x363748['asqpz']);
    });
    $(document)['click'](function(_0x452ce1) {
        var _0x3f14f3 = {
            'VKzZH': function(_0x5254d0, _0x2b996e) {
                return _0x363748['sRpZc'](_0x5254d0, _0x2b996e);
            },
            'BnObK': function(_0x4cc161, _0x5b3df7) {
                return _0x4cc161 == _0x5b3df7;
            },
            'IfIWX': function(_0x2db960, _0x2e9a35) {
                return _0x2db960 != _0x2e9a35;
            },
            'szFJc': '.cancel-btn',
            'iImbo': function(_0x43259f, _0x5cbf51) {
                return _0x363748['ArOHF'](_0x43259f, _0x5cbf51);
            },
            'mJDzg': '.ac_hot',
            'SqKhU': function(_0xba4622, _0x1581b3) {
                return _0x363748['fcGqO'](_0xba4622, _0x1581b3);
            },
            'UDGvR': '.ac_wd,.search-btn',
            'ojBVo': _0x363748['wNsxO'],
            'unDtj': _0x363748['vrsnX'],
            'NWtme': 'mobile-open'
        };
        if (_0x363748['zLZSe'] === 'HKijG') {
            _0x3f14f3['VKzZH']($, '.ant-back-top')['fadeIn'](0x12c);
        } else {
            if (_0x363748['nZwtr'](_0x363748['fcGqO']($, _0x452ce1['target'])['closest'](_0x363748['wjdWg'])['length'], 0x0) || _0x363748['VYYEk']($(_0x452ce1['target'])['closest']('.cancel-btn')['length'], 0x0)) {
                if (_0x363748['hoSZg'](_0x363748['RPbAy'], 'XSbrA')) {
                    if (_0x3f14f3['BnObK']($(_0x452ce1['target'])['closest']('#txtKeywords,.search-box,.nav-menu-search,.txtKeywords')['length'], 0x0) || _0x3f14f3['IfIWX']($(_0x452ce1['target'])['closest'](_0x3f14f3['szFJc'])['length'], 0x0)) {
                        _0x3f14f3['iImbo']($, _0x3f14f3['mJDzg'])['addClass']('none');
                        _0x3f14f3['SqKhU']($, _0x3f14f3['UDGvR'])['removeClass'](_0x3f14f3['ojBVo']);
                        $(_0x3f14f3['unDtj'])['removeClass'](_0x3f14f3['NWtme']);
                        _0x3f14f3['SqKhU']($, '.nav-search')['removeClass']('block');
                    }
                } else {
                    $(_0x363748['KrSmD'])['addClass'](_0x363748['bvvgA']);
                    _0x363748['fcGqO']($, _0x363748['kgSLw'])['removeClass'](_0x363748['wNsxO']);
                    _0x363748['fcGqO']($, _0x363748['vrsnX'])['removeClass']('mobile-open');
                    _0x363748['fcGqO']($, _0x363748['czkqJ'])['removeClass'](_0x363748['HPXxR']);
                }
            }
        }
    });
    _0x363748['VKjcO']($, _0x363748['QTflV'])['click'](function() {
        var _0x4eff40 = {
            'TIpUT': function(_0x44d630, _0x13f490) {
                return _0x44d630(_0x13f490);
            },
            'lvfla': '.popup-tips',
            'JetHW': 'open'
        };
        if (_0x363748['HqaSS'](_0x363748['ofnYb'], _0x363748['ofnYb'])) {
            _0x4eff40['TIpUT']($, _0x4eff40['lvfla'])['removeClass']('none')['addClass'](_0x4eff40['JetHW']);
        } else {
            if (!_0x363748['fcGqO']($, this)['hasClass'](_0x363748['PVzgF'])) {
                $(this)['addClass'](_0x363748['PVzgF'])['siblings']()['removeClass']('selected');
                _0x363748['MbLpW']($, '.tab-list')['eq']($(this)['index']())['addClass'](_0x363748['PVzgF'])['siblings']()['removeClass'](_0x363748['PVzgF']);
                _0x363748['MbLpW']($, '.tab-list')['eq']($(this)['index']())['find'](_0x363748['uiiUj'])['lazyload']();
            }
            $('.module-tab-drop')['removeClass'](_0x363748['mfleB']);
            _0x363748['eibPH']($, this)['parents'](_0x363748['UGyIB'])['siblings']('.module-tab-name')['children'](_0x363748['JCBrp'])['text'](_0x363748['lvfzj']($, this)['attr']('data-dropdown-value'));
        }
    });
    $('.downtab-item')['click'](function() {
        var _0x1d9d73 = {
            'Tyrzv': '.shortcuts-box'
        };
        if (_0x363748['HqaSS'](_0x363748['PDcue'], _0x363748['KOwXG'])) {
            if (!_0x363748['lvfzj']($, this)['hasClass']('selected')) {
                _0x363748['lvfzj']($, this)['addClass'](_0x363748['PVzgF'])['siblings']()['removeClass']('selected');
                _0x363748['lvfzj']($, '.downtab-list')['eq']($(this)['index']())['addClass'](_0x363748['PVzgF'])['siblings']()['removeClass']('selected');
                _0x363748['IqvEW']($, this)['parents'](_0x363748['UGyIB'])['siblings']('.module-tab-name')['children'](_0x363748['JCBrp'])['text'](_0x363748['IqvEW']($, this)['attr'](_0x363748['QOitx']));
            }
            _0x363748['bcDBa']($, _0x363748['znzeG'])['removeClass'](_0x363748['mfleB']);
        } else {
            $(_0x1d9d73['Tyrzv'])['fadeOut'](0x3e8);
        }
    });
    $(_0x363748['QGdec'])['click'](function() {
        _0x363748['bBaKE']($, _0x363748['LolLN'])['addClass']('up');
    });
    _0x363748['VKjcO']($, '.btn-jx')['click'](function() {
        _0x363748['bBaKE']($, '.popup-jx')['removeClass'](_0x363748['bvvgA'])['addClass'](_0x363748['xSOwJ']);
    });
    _0x363748['MtpXY']($, '.btn-screen')['click'](function() {
        _0x363748['bBaKE']($, _0x363748['NaZEx'])['removeClass'](_0x363748['bvvgA'])['addClass'](_0x363748['xSOwJ']);
    });
    _0x363748['epRYS']($, _0x363748['ULWgt'])['click'](function() {
        $(_0x363748['ScfMN'])['removeClass'](_0x363748['bvvgA'])['addClass'](_0x363748['xSOwJ']);
    });
    _0x363748['epRYS']($, _0x363748['sHYPU'])['click'](function() {
        $('.popup-notice')['removeClass'](_0x363748['bvvgA'])['addClass']('open');
    });
    _0x363748['utZlR']($, _0x363748['UeyST'])['click'](function() {
        $(_0x363748['NFQED'])['removeClass']('open')['addClass'](_0x363748['bvvgA']);
    });
    $(_0x363748['QANVH'])['click'](function() {
        _0x363748['bBaKE']($, this)['parent'](_0x363748['RKvyk'])['addClass']('module-tab-drop');
    });
    _0x363748['utZlR']($, '.shortcuts-mobile-overlay,.close-drop')['click'](function() {
        $(_0x363748['znzeG'])['removeClass'](_0x363748['mfleB']);
    });
    _0x363748['utZlR']($, '.module-sorttab .module-tab-name')['click'](function() {
        var _0x6f8d2d = {
            'kWoyN': function(_0x39de34, _0x4a620f) {
                return _0x363748['HRsMe'](_0x39de34, _0x4a620f);
            },
            'KRVIW': _0x363748['rSgnY']
        };
        if (_0x363748['HqaSS']('uEBgb', 'NsllH')) {
            $(this)['parents'](_0x363748['qILpr'])['addClass'](_0x363748['mfleB']);
        } else {
            var _0x3593e9 = new ClipboardJS('.urlcopy');
            _0x3593e9['on'](_0x363748['rOarT'], function(_0x22a240) {
                _0x6f8d2d['kWoyN'](show_tip, _0x6f8d2d['KRVIW']);
            });
            _0x3593e9['on'](_0x363748['METUg'], function(_0x5be750) {
                console['log'](_0x5be750);
            });
        }
    });
    _0x363748['PjDGb']($, '.sort-button')['click'](function() {
        var _0x5d5558 = {
            'HWenE': _0x363748['LolLN']
        };
        if (_0x363748['GmArQ'](_0x363748['mCtrk'], _0x363748['mCtrk'])) {
            $(_0x5d5558['HWenE'])['addClass']('up');
        } else {
            _0x363748['HRsMe']($, this)['toggleClass'](_0x363748['TYuzQ']);
            _0x363748['TnvNU']($, _0x363748['cXkZR']($, this)['attr']('to'))['html']($(_0x363748['TtCdw']($, this)['attr']('to'))['children']()['get']()['reverse']());
        }
    });
    _0x363748['bCUgp']($, _0x363748['AbRow'])['click'](function() {
        var _0x561391 = {
            'VXXbQ': function(_0x15025f, _0xd580fe) {
                return _0x15025f(_0xd580fe);
            },
            'SaiRm': _0x363748['TYuzQ'],
            'UfDZT': function(_0x3028d4, _0x365761) {
                return _0x3028d4(_0x365761);
            },
            'IDBZk': function(_0x64e280, _0x846a7b) {
                return _0x363748['TtCdw'](_0x64e280, _0x846a7b);
            }
        };
        if (_0x363748['hoSZg'](_0x363748['ewcew'], 'NIRrj')) {
            _0x561391['VXXbQ']($, this)['toggleClass'](_0x561391['SaiRm']);
            $($(this)['attr']('to'))['html'](_0x561391['UfDZT']($, _0x561391['IDBZk']($, this)['attr']('to'))['children']()['get']()['reverse']());
        } else {
            _0x363748['TtCdw']($, _0x363748['yeCpz'])['toggleClass'](_0x363748['bvvgA']);
        }
    });
    $(_0x363748['oeHCB'])['click'](function() {
        _0x363748['ZfNJj']($, _0x363748['oeHCB'])['hide']();
        _0x363748['ZfNJj']($, _0x363748['hvcIH'])['html']('');
    });
    $(_0x363748['fpJxK'])['on'](_0x363748['jsOrB'], function() {
        var _0x283516 = {
            'HbbXs': function(_0x495ce3, _0x13451c) {
                return _0x363748['ZfNJj'](_0x495ce3, _0x13451c);
            },
            'shTNz': _0x363748['PVzgF'],
            'OjrWz': function(_0x49d772, _0x5c1ed8) {
                return _0x363748['ZfNJj'](_0x49d772, _0x5c1ed8);
            },
            'CDTEU': '.tab-list',
            'zGmgi': function(_0x2832b2, _0x449937) {
                return _0x363748['ZfNJj'](_0x2832b2, _0x449937);
            },
            'pfvzM': function(_0xd30253, _0x319d7) {
                return _0x363748['jbEMu'](_0xd30253, _0x319d7);
            },
            'qeaiy': function(_0x204949, _0x165ce9) {
                return _0x363748['ulJEK'](_0x204949, _0x165ce9);
            }
        };
        if (_0x363748['GmArQ'](_0x363748['vkGWS'], 'jlBda')) {
            _0x283516['HbbXs']($, this)['addClass'](_0x283516['shTNz'])['siblings']()['removeClass'](_0x283516['shTNz']);
            _0x283516['OjrWz']($, _0x283516['CDTEU'])['eq'](_0x283516['zGmgi']($, this)['index']())['addClass'](_0x283516['shTNz'])['siblings']()['removeClass'](_0x283516['shTNz']);
            _0x283516['pfvzM']($, _0x283516['CDTEU'])['eq'](_0x283516['qeaiy']($, this)['index']())['find']('.lazyload')['lazyload']();
        } else {
            $['cookie'](_0x363748['wAgSY'], null, {
                'expires': -0x1,
                'path': '/'
            });
            $['cookie']('vt', null, {
                'expires': -0x1,
                'path': '/player'
            });
            $['cookie']('vo', null, {
                'expires': -0x1,
                'path': '/player'
            });
            $['cookie']('ve', null, {
                'expires': -0x1,
                'path': '/player'
            });
        }
    });
    _0x363748['rtRmB']($, function() {
        if (_0x363748['hoSZg']('qSnbN', 'qSnbN')) {
            _0x363748['AsQOe']($, _0x363748['DHRpe'])['click'](() => {
                $(_0x363748['bzSfP'])['toggleClass']('mx-lrshow ');
                _0x363748['CqwKI'](setTimeout, () => {}, 0x3e8);
            });
        } else {
            _0x363748['ulJEK']($, _0x363748['bzSfP'])['toggleClass'](_0x363748['vbsnI']);
            setTimeout(() => {}, 0x3e8);
        }
    });
    if (_0x363748['vyTXu'](_0x363748['rtRmB']($, '.qrcode-img')['length'], 0x0)) {
        _0x363748['rtRmB']($, _0x363748['FxkYN'])['qrcode']({
            'text': location['href'],
            'render': _0x363748['ghwRb'],
            'width': 0x5a,
            'height': 0x5a
        });
    }
    if ($(_0x363748['YHEQN'])['length'] > 0x0) {
        if (_0x363748['UoLVR'](_0x363748['tEIzQ'], _0x363748['RkDOB'])) {
            var _0x135483 = new ClipboardJS('.share-btn');
            _0x135483['on'](_0x363748['rOarT'], function(_0x3a5e0a) {
                show_tip(_0x363748['aocAt']);
            });
            _0x135483['on'](_0x363748['METUg'], function(_0x41110d) {
                console['log'](_0x41110d);
            });
        } else {
            _0x363748['TGPKL']($, this)['parents'](_0x363748['qILpr'])['addClass']('module-tab-drop');
        }
    }
    if (_0x363748['zpRTD'](_0x363748['rtRmB']($, _0x363748['oKPdQ'])['length'], 0x0)) {
        if (_0x363748['UoLVR'](_0x363748['dCopR'], _0x363748['CwzeA'])) {
            var _0x397e1d = new ClipboardJS('.copy');
            _0x397e1d['on'](_0x363748['rOarT'], function(_0x4a2804) {
                show_tip(_0x363748['LeHfQ']);
            });
            _0x397e1d['on']('error', function(_0x2e6b2) {
                if (_0x363748['ESzlw'](_0x363748['zNRNZ'], _0x363748['zNRNZ'])) {
                    _0x363748['LSYef']($, this)['parent'](_0x363748['RKvyk'])['addClass']('module-tab-drop');
                } else {
                    console['log'](_0x2e6b2);
                }
            });
        } else {
            console['log'](e);
        }
    }
    if (_0x363748['zpRTD'](_0x363748['TjvrK']($, '.urlcopy')['length'], 0x0)) {
        if (_0x363748['Vyqjd']('QXPcV', _0x363748['aXWVV'])) {
            var _0xed0f77 = new ClipboardJS(_0x363748['NHxDw']);
            _0xed0f77['on'](_0x363748['rOarT'], function(_0x2b7d70) {
                _0x363748['YJVyk'](show_tip, _0x363748['rSgnY']);
            });
            _0xed0f77['on']('error', function(_0x447fb0) {
                console['log'](_0x447fb0);
            });
        } else {
            history_html = _0x363748['uciXQ'];
        }
    }
    $(function() {
        var _0x4a48ba = {
            'actRx': function(_0x2e98bd, _0x50d6c9) {
                return _0x363748['fowha'](_0x2e98bd, _0x50d6c9);
            },
            'QQQjS': _0x363748['bzSfP'],
            'wGRkM': _0x363748['vbsnI'],
            'NSKwp': function(_0x14d561, _0x37572d, _0x198318) {
                return _0x363748['CqwKI'](_0x14d561, _0x37572d, _0x198318);
            },
            'bXLso': _0x363748['DHRpe'],
            'ZUqTJ': 'error'
        };
        if (_0x363748['OtdRa'](_0x363748['jBmOR'], 'eQJCn')) {
            $(_0x4a48ba['bXLso'])['click'](() => {
                _0x4a48ba['actRx']($, _0x4a48ba['QQQjS'])['toggleClass'](_0x4a48ba['wGRkM']);
                _0x4a48ba['NSKwp'](setTimeout, () => {}, 0x3e8);
            });
        } else {
            _0x363748['fowha']($, window)['scroll'](function() {
                var _0x18d26c = {
                    'fzhiI': function(_0x1901d7, _0x49f1cf) {
                        return _0x363748['KgmbH'](_0x1901d7, _0x49f1cf);
                    },
                    'piwAP': _0x363748['LeHfQ'],
                    'qXaeD': _0x363748['NFQED'],
                    'ZOZzC': _0x363748['xSOwJ']
                };
                if ('BCbLf' !== 'BCbLf') {
                    var _0x561e40 = new ClipboardJS('.copy');
                    _0x561e40['on']('success', function(_0x31fd4d) {
                        _0x18d26c['fzhiI'](show_tip, _0x18d26c['piwAP']);
                    });
                    _0x561e40['on'](_0x4a48ba['ZUqTJ'], function(_0x42b8e8) {
                        console['log'](_0x42b8e8);
                    });
                } else {
                    if (_0x363748['KgmbH']($, window)['scrollTop']() >= 0x64) {
                        _0x363748['OZRmG']($, _0x363748['HiAkv'])['fadeIn'](0x12c);
                    } else {
                        if (_0x363748['xLMCp'] === _0x363748['MOibm']) {
                            $(_0x18d26c['qXaeD'])['removeClass'](_0x18d26c['ZOZzC'])['addClass']('none');
                        } else {
                            _0x363748['fowha']($, _0x363748['HiAkv'])['fadeOut'](0x12c);
                        }
                    }
                }
            });
            $(_0x363748['HiAkv'])['click'](function() {
                _0x363748['fowha']($, 'html,body')['animate']({
                    'scrollTop': _0x363748['Rcjxq']
                }, 0x320);
            });
        }
    });
});;
_0xodf = 'jsjiami.com.v6'