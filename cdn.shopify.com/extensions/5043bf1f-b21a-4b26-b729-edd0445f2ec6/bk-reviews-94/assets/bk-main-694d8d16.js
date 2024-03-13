import {
    j as _0xb4c941,
    S as _0x36989f,
    a as _0x1235bb,
    r as _0x2175a9,
    T as _0x5778e4,
    b as _0x58647d,
    R as _0x4c1b22,
    c as _0x563b74,
    d as _0x1bc5d6,
    E as _0x2c50b2,
    u as _0x538209,
    e as _0x3e780a,
    f as _0x29a715,
    g as _0x2fa2de,
    h as _0x19da61,
    i as _0x26425d,
    k as _0x3b5aaa,
    l as _0x3be18c,
    I as _0x4a7679,
    m as _0x2c9f34,
    F as _0x5c431f,
    n as _0x5a6423,
    o as _0x2c7819
} from './bk-index-e184e9c0.js';
function PianoCollectionStarSection$1({
    reviewAmount: _0x99b75f,
    averageRating: _0x4912f5
}) {
    return _0xb4c941['jsx']('div', {
        'className': 'tw-flex\x20tw-gap-2\x20tw-text-black/80\x20tw-text-md\x20tw-items-center',
        'children': _0xb4c941['jsxs']('div', {
            'className': 'tw-flex\x20tw-gap-1\x20tw-items-center',
            'children': [
                _0xb4c941['jsx'](_0x36989f, {
                    'starSize': 'medium',
                    'className': 'tw-text-2xl\x20mb-[1px]',
                    'averageRating': _0x4912f5
                }),
                _0xb4c941['jsxs']('p', {
                    'className': 'tw-text-[max(14px,_1rem)]\x20tw-leading-[normal]',
                    'children': [
                        '(',
                        _0x99b75f,
                        ')'
                    ]
                })
            ]
        })
    });
}
function PianoCollectionStarSection({
    reviewAmount: _0x3d1d8e,
    averageRating: _0x15691f
}) {
    return _0xb4c941['jsx']('div', {
        'className': 'tw-flex\x20tw-gap-2\x20tw-text-black/80\x20tw-text-md\x20tw-items-center',
        'children': _0xb4c941['jsxs']('div', {
            'className': 'tw-flex\x20tw-gap-1\x20tw-items-center',
            'children': [
                _0xb4c941['jsx'](_0x1235bb, {
                    'starSize': 'medium',
                    'className': 'tw-text-2xl\x20tw-mb-[1px]',
                    'averageRating': _0x15691f
                }),
                _0xb4c941['jsxs']('p', {
                    'className': 'tw-text-[max(14px,_1rem)]',
                    'children': [
                        '(',
                        _0x3d1d8e,
                        ')'
                    ]
                })
            ]
        })
    });
}
function collectionStarSectionFactory({
    theme: _0x1e86a0,
    componentProps: _0x42e07d
}) {
    const {
        reviewAmount: _0x52d081,
        averageRating: _0x282470
    } = _0x42e07d;
    const _0x330e40 = {
        'default': _0xb4c941['jsx'](PianoCollectionStarSection$1, {
            'reviewAmount': _0x52d081,
            'averageRating': _0x282470
        }),
        'sol': _0xb4c941['jsx'](PianoCollectionStarSection$1, {
            'reviewAmount': _0x52d081,
            'averageRating': _0x282470
        }),
        'classic': _0xb4c941['jsx'](PianoCollectionStarSection$1, {
            'reviewAmount': _0x52d081,
            'averageRating': _0x282470
        }),
        'wide': _0xb4c941['jsx'](PianoCollectionStarSection$1, {
            'reviewAmount': _0x52d081,
            'averageRating': _0x282470
        }),
        'piano': _0xb4c941['jsx'](PianoCollectionStarSection, {
            'reviewAmount': _0x52d081,
            'averageRating': _0x282470
        })
    };
    return _0x330e40[_0x1e86a0] ?? _0x330e40['default'];
}
function CollectionStarSection({
    theme: _0x23d794,
    reviewAmount: _0x4f0dee,
    averageRating: _0x471993
}) {
    const _0x597e9d = collectionStarSectionFactory({
        'theme': _0x23d794,
        'componentProps': {
            'reviewAmount': _0x4f0dee,
            'averageRating': _0x471993
        }
    });
    return _0xb4c941['jsx']('div', {
        'className': 'tw-my-[0.75rem]\x20tw-w-min',
        'children': _0x597e9d
    });
}
const getStoreProducts = async _0x297c0e => {
    const _0x391434 = 0xfa;
    const _0x39c067 = 'https://' + _0x297c0e + '/products.json?limit=' + _0x391434;
    const _0x4e0d90 = 0x5;
    let _0x214ba9 = 0x3;
    let _0x6e3915 = [];
    let _0x172cce = ![];
    for (let _0x398f61 = 0x0; _0x398f61 < _0x214ba9; _0x398f61++) {
        await Promise['all'](new Array(_0x4e0d90)['fill'](0x0)['map'](async (_0xccdf11, _0x125f8d) => {
            const _0x47ad6c = _0x4e0d90 * _0x398f61 + _0x125f8d + 0x1;
            const _0x3557b4 = _0x39c067 + '&page=' + _0x47ad6c;
            const _0x3c9d4c = await _0x58647d['get'](_0x3557b4);
            if (_0x3c9d4c['status'] !== 0xc8) {
                console['error']('Failed\x20to\x20fetch\x20products\x20from\x20' + _0x3557b4);
                return;
            }
            const _0x2e5251 = _0x3c9d4c['data']['products'];
            _0x6e3915 = _0x6e3915['concat'](_0x2e5251);
            if (_0x2e5251['length'] < _0x391434) {
                _0x172cce = !![];
            }
        }));
        if (_0x172cce) {
            break;
        }
    }
    return _0x6e3915;
};
const insertProductStatistics = (_0x22287b, _0x99bda, _0x1c4c68, _0x2ee0fb, _0x469065) => {
    const {
        averageRating: _0x9e2705,
        reviewAmount: _0x548eed
    } = _0x22287b;
    if (_0x99bda['querySelector']('.collection-star-section[data-product-id=\x22' + _0x2ee0fb + '\x22]')) {
        return;
    }
    if (_0x469065 && !_0x548eed)
        return;
    const _0x160048 = document['createElement']('div');
    _0x160048['classList']['add']('collection-star-section', 'bk-reviews', _0x1c4c68);
    _0x160048['setAttribute']('data-product-id', _0x2ee0fb);
    _0x160048['style']['width'] = 'min-content';
    _0x99bda['style']['margin'] = '0';
    const _0x579517 = _0x99bda['parentElement'];
    if (!_0x579517)
        return;
    const _0x5a1548 = _0x99bda['nextElementSibling'];
    if (_0x5a1548) {
        _0x5a1548['style']['setProperty']('margin-top', '0');
        _0x579517['insertBefore'](_0x160048, _0x5a1548);
    } else {
        _0x579517['appendChild'](_0x160048);
    }
    _0x4c1b22['render'](_0xb4c941['jsx'](CollectionStarSection, {
        'theme': _0x1c4c68,
        'averageRating': _0x9e2705,
        'reviewAmount': _0x548eed
    }), _0x160048);
};
const getStoreProductsMap = async (_0x304a73, _0x2ba779) => {
    const _0x74c2de = new Map();
    _0x304a73['forEach'](_0x530a57 => {
        _0x74c2de['set'](_0x530a57['handle'], _0x530a57['id']);
    });
    return _0x74c2de;
};
const insertProductsStatistics = (_0x3250d3, _0x40a1b9, _0x203da8, _0x3ff3f2, _0x4927c5) => {
    const _0x557072 = new Map();
    _0x3250d3['forEach'](_0x3250dc => {
        _0x557072['set'](_0x3250dc['productId'], _0x3250dc);
    });
    _0x40a1b9['forEach'](_0x1c7c5f => {
        var _0x17e835, _0x42d93f, _0x1d6af0;
        const _0xa215bf = decodeURIComponent(_0x1c7c5f['getAttribute']('href') ?? '');
        const _0x36f51b = (_0x42d93f = (_0x17e835 = _0xa215bf['split']('/products/')) == null ? void 0x0 : _0x17e835[0x1]) == null ? void 0x0 : _0x42d93f['split']('?')[0x0];
        if (!_0x36f51b)
            return;
        const _0x16b01b = _0x203da8['get'](_0x36f51b);
        const _0x47a540 = _0x16b01b ? _0x557072['get'](String(_0x16b01b)) : null;
        const _0x43bbbc = (_0x1d6af0 = _0x1c7c5f['parentElement']) == null ? void 0x0 : _0x1d6af0['querySelector']('.collection-star-section[data-product-id=\x22' + _0x16b01b + '\x22]');
        if (_0x43bbbc)
            return;
        if (_0x47a540) {
            insertProductStatistics(_0x47a540, _0x1c7c5f, _0x3ff3f2, String(_0x16b01b), _0x4927c5);
        }
    });
};
const getProductCards = () => {
    const _0x19b6f0 = document['querySelectorAll']('a[href*=\x22/products/\x22][class*=\x22title\x22]') ?? document['querySelectorAll']('[class*=\x22title\x22]\x20a[href*=\x22/products/\x22]');
    return Array['from'](_0x19b6f0)['filter'](_0x52630a => _0x52630a instanceof HTMLElement);
};
const getProductHandles = _0x4ae570 => {
    const _0x42dc06 = new Set();
    _0x4ae570['forEach'](_0x5a7b00 => {
        var _0x553cd7, _0x3a2617;
        const _0x2a657a = decodeURIComponent(_0x5a7b00['getAttribute']('href') ?? '');
        const _0x2ed34c = (_0x3a2617 = (_0x553cd7 = _0x2a657a['split']('/products/')) == null ? void 0x0 : _0x553cd7[0x1]) == null ? void 0x0 : _0x3a2617['split']('?')[0x0];
        if (!_0x2ed34c)
            return;
        _0x42dc06['add'](_0x2ed34c);
    });
    return _0x42dc06;
};
const getFilteredProducts = (_0x23b623, _0x4ad5af) => {
    const _0x4cb832 = [];
    for (const _0x50aeb1 of _0x4ad5af) {
        if (_0x23b623['has'](_0x50aeb1['handle'])) {
            _0x4cb832['push'](_0x50aeb1);
        }
    }
    return _0x4cb832;
};
const getProductIds = _0x90736d => {
    return _0x90736d['map'](_0x35310b => _0x35310b['id']);
};
const getProductsStatistics = (_0x596d8d, _0x5ba51c) => {
    const _0x5bc89 = new _0x563b74(_0x596d8d[0x0], _0x5ba51c, _0x1bc5d6);
    return _0x5bc89['getCollectionStatistics'](_0x596d8d);
};
const fixSliderOverflow = () => {
    const _0x4196ba = document['querySelectorAll']('.flickity-viewport:has(.collection-star-section)');
    if (!_0x4196ba)
        return;
    _0x4196ba['forEach'](_0x855d93 => {
        const _0x5d273b = _0x855d93['querySelector']('.flickity-slider\x20>\x20div');
        if (!_0x5d273b)
            return;
        const _0x819095 = _0x5d273b['offsetHeight'];
        const _0x4898a9 = _0x855d93['offsetHeight'];
        if (_0x819095 > _0x4898a9) {
            _0x855d93['style']['height'] = _0x819095 + 'px';
        }
    });
};
const getStatisticsAndMap = async (_0x5bb490, _0x22e60b) => {
    const _0x51b609 = getProductHandles(_0x5bb490);
    const _0x590cc8 = await getStoreProducts(_0x22e60b);
    const _0x1e88cc = getFilteredProducts(_0x51b609, _0x590cc8);
    const _0x7c00c1 = getProductIds(_0x1e88cc);
    const _0x965a62 = await getStoreProductsMap(_0x1e88cc);
    const _0x3cb5a9 = await getProductsStatistics(_0x7c00c1, _0x22e60b);
    return {
        'statistics': _0x3cb5a9,
        'productMap': _0x965a62
    };
};
function useCollectionStarSection(_0x58b263, _0x354d55 = ![]) {
    const [_0x3b0195, _0x1ebeb0] = _0x2175a9['useState']();
    const [_0x5e6c67, _0x4fefe2] = _0x2175a9['useState']();
    const [_0x4d9816, _0x2b27ee] = _0x2175a9['useState'](![]);
    const {theme: _0x4168a0} = _0x2175a9['useContext'](_0x5778e4);
    const _0x4940a9 = getProductCards();
    _0x2175a9['useEffect'](() => {
        if (!_0x4940a9['length'] || (_0x3b0195 == null ? void 0x0 : _0x3b0195['length']))
            return;
        getStatisticsAndMap(_0x4940a9, _0x58b263)['then'](_0x695917 => {
            const {
                statistics: _0x51c538,
                productMap: _0x4e6328
            } = _0x695917;
            _0x1ebeb0(_0x51c538);
            _0x4fefe2(_0x4e6328);
        });
    }, [_0x4940a9]);
    _0x2175a9['useEffect'](() => {
        if (_0x4168a0 && _0x3b0195 && _0x5e6c67 && !_0x4d9816) {
            insertProductsStatistics(_0x3b0195, _0x4940a9, _0x5e6c67, _0x4168a0, _0x354d55);
            fixSliderOverflow();
            _0x2b27ee(!![]);
        }
    }, [
        _0x4168a0,
        _0x3b0195,
        _0x5e6c67
    ]);
    return;
}
const findFirstElementInDOM = _0x5ae8f8 => {
    return _0x5ae8f8['filter'](_0x2f345e => _0x2f345e !== null)['sort']((_0x2bc817, _0x316a3e) => {
        if (!_0x2bc817 || !_0x316a3e)
            return 0x0;
        return _0x2bc817['compareDocumentPosition'](_0x316a3e) & Node['DOCUMENT_POSITION_FOLLOWING'] ? -0x1 : 0x1;
    })[0x0];
};
const insertReviewSection = _0x21eae4 => {
    var _0x30139c, _0x7b5e78;
    const _0x990554 = document['getElementById']('bk-review-section');
    if (_0x990554) {
        return;
    }
    let _0x1d2631;
    const _0x42beba = document['querySelectorAll']('.shopify-section[id*=\x22template\x22]');
    for (const _0x3291ec of _0x42beba) {
        if (_0x3291ec['querySelector']('h1') || _0x3291ec['querySelector']('h2')) {
            _0x1d2631 = _0x3291ec;
            break;
        }
    }
    const _0x38df60 = document['querySelector']('main') ?? document['querySelector']('#main') ?? document['querySelector']('[role=\x22main\x22]');
    const _0x4ff24c = _0x1d2631 ? _0x1d2631['parentNode'] : _0x38df60;
    const _0x35dedf = document['createElement']('div');
    _0x35dedf['classList']['add']('bk-reviews', _0x21eae4);
    _0x35dedf['style']['width'] = '100%';
    _0x35dedf['style']['height'] = 'fit-content';
    const _0x13c305 = document['querySelector']('.container--flush');
    const _0x409c5f = document['querySelector']('.shopify-section[id*=\x22recently-viewed-products\x22]');
    const _0x1ee831 = document['querySelector']('.shopify-section[id*=\x22recommendations\x22]');
    const _0xb350af = document['querySelector']('.shopify-section[id*=\x22promotions\x22]');
    const _0x5e916f = document['querySelector']('.shopify-section[id*=\x22product-content\x22]');
    const _0x729471 = document['querySelector']('.shopify-section[id*=\x22information-tabs\x22]');
    const _0x18f845 = [
        _0x409c5f,
        _0x1ee831,
        _0xb350af
    ];
    const _0x3c1013 = findFirstElementInDOM(_0x18f845);
    const _0xcf088c = _0x3c1013 == null ? void 0x0 : _0x3c1013['parentNode'];
    if (_0x3c1013 && _0xcf088c) {
        console['log']('insertBeforeSection', _0x3c1013);
        _0xcf088c['insertBefore'](_0x35dedf, _0x3c1013);
    } else if (_0x5e916f && _0x5e916f['nextElementSibling']) {
        console['log']('productSection', _0x5e916f);
        (_0x30139c = _0x5e916f['parentNode']) == null ? void 0x0 : _0x30139c['insertBefore'](_0x35dedf, _0x5e916f['nextElementSibling']);
    } else if (_0x729471 && _0x729471['nextElementSibling']) {
        console['log']('informationTabsSection', _0x729471);
        (_0x7b5e78 = _0x729471['parentNode']) == null ? void 0x0 : _0x7b5e78['insertBefore'](_0x35dedf, _0x729471['nextElementSibling']);
    } else if (_0x13c305 && _0x13c305['parentNode'] && _0x13c305['nextElementSibling']) {
        console['log']('containerFlush', _0x13c305);
        _0x13c305['parentNode']['insertBefore'](_0x35dedf, _0x13c305['nextElementSibling']);
    } else if (_0x1d2631) {
        if (_0x1d2631['nextElementSibling']) {
            console['log']('after\x20targetSection');
            _0x4ff24c == null ? void 0x0 : _0x4ff24c['insertBefore'](_0x35dedf, _0x1d2631['nextElementSibling']);
        } else {
            console['log']('child\x20of\x20targetSectionParent');
            _0x4ff24c == null ? void 0x0 : _0x4ff24c['appendChild'](_0x35dedf);
        }
    } else if (_0x38df60) {
        console['log']('child\x20of\x20mainSection');
        _0x38df60['appendChild'](_0x35dedf);
    } else {
        console['log']('no\x20section\x20found');
    }
    _0x4c1b22['render'](_0xb4c941['jsx'](_0x2c50b2, {
        'theme': _0x21eae4,
        'extension': 'review-section'
    }), _0x35dedf);
};
const insertStarSection = _0x1144a0 => {
    const _0x5c457d = document['getElementById']('bk-star-section');
    if (_0x5c457d) {
        console['log']('returned\x20because\x20already\x20star\x20section');
        return;
    }
    const _0x13000f = document['querySelector']('main') ?? document['querySelector']('#main') ?? document['querySelector']('[role=\x22main\x22]');
    const _0x211cf6 = [(_0x13000f == null ? void 0x0 : _0x13000f['querySelector']('h1')) ?? document['querySelector']('h1') ?? (_0x13000f == null ? void 0x0 : _0x13000f['querySelector']('h2')) ?? document['querySelector']('h2')];
    const _0x1ffed0 = document['querySelectorAll']('.small--hide\x20h1,\x20.small--hide\x20h2');
    _0x1ffed0['forEach'](_0x30404e => {
        _0x211cf6['push'](_0x30404e);
    });
    _0x211cf6['forEach'](_0xef7306 => {
        const _0x292be6 = _0xef7306 == null ? void 0x0 : _0xef7306['parentElement'];
        const _0x56d06b = document['createElement']('div');
        _0x56d06b['classList']['add']('bk-reviews', _0x1144a0);
        if (_0xef7306 && _0x292be6) {
            _0xef7306['style']['marginBottom'] = '0';
            _0x292be6['insertBefore'](_0x56d06b, _0xef7306['nextSibling']);
            _0x4c1b22['render'](_0xb4c941['jsx'](_0x2c50b2, {
                'theme': _0x1144a0,
                'extension': 'star-section'
            }), _0x56d06b);
        }
    });
};
var e = Object['defineProperty'];
var r = function (_0x20f3e7, _0x22056b) {
    return e(_0x20f3e7, 'name', {
        'value': _0x22056b,
        'configurable': !![]
    });
};
var n = r(function (_0x3984e1) {
    _0x2175a9['useEffect'](function () {
        var _0x57d219 = document['head']['querySelectorAll']('style');
        var _0x283b8e = !![], _0x30ac4f = ![], _0x466871 = void 0x0;
        try {
            for (var _0x4d09f9 = _0x57d219[Symbol['iterator']](), _0x16e5ff; !(_0x283b8e = (_0x16e5ff = _0x4d09f9['next']())['done']); _0x283b8e = !![]) {
                var _0x2a78a1 = _0x16e5ff['value'];
                if (_0x2a78a1['innerHTML'] === _0x3984e1)
                    return;
            }
        } catch (_0x4ccf4e) {
            _0x30ac4f = !![];
            _0x466871 = _0x4ccf4e;
        } finally {
            try {
                if (!_0x283b8e && _0x4d09f9['return'] != null) {
                    _0x4d09f9['return']();
                }
            } finally {
                if (_0x30ac4f) {
                    throw _0x466871;
                }
            }
        }
        var _0x2d4177 = document['createElement']('style');
        _0x2d4177['innerHTML'] = _0x3984e1, document['head']['appendChild'](_0x2d4177);
    }, [_0x3984e1]);
}, 'useStyleInjection');
const injectThemePreferencesStyle = _0x415e02 => {
    if (!_0x415e02)
        return;
    const _0x55a78d = '.bk-reviews\x20>\x20*\x20{' + Object['entries'](_0x415e02)['filter'](([_0x5789f4]) => _0x5789f4['includes']('Color'))['map'](([_0x406dc5, _0xa70ce7]) => _0xa70ce7 && '--twc-' + _0x406dc5['split']('Color')[0x0] + ':\x20' + _0x26425d(_0xa70ce7)['slice'](0x4, -0x1)['replaceAll'](',', ''))['join'](';\x20') + ';}';
    n(_0x55a78d);
};
function App() {
    const _0x55e20b = _0x538209();
    const _0x567c9c = _0x3e780a();
    const _0x12ae51 = _0x29a715();
    const {reviewStatistics: _0x173cee} = _0x2175a9['useContext'](_0x2fa2de);
    const {
        theme: _0x3da616,
        setTheme: _0xd09f1c,
        themePreferences: _0x4aace1,
        setThemePreferences: _0x1734b2
    } = _0x2175a9['useContext'](_0x5778e4);
    _0x19da61();
    injectThemePreferencesStyle(_0x4aace1);
    if (!_0x567c9c)
        return;
    let _0x47c987 = ![];
    let _0x5d93c4 = ![];
    let _0x32603d = ![];
    if (_0x4aace1) {
        _0x47c987 = !(_0x173cee == null ? void 0x0 : _0x173cee['reviewAmount']) && (_0x4aace1 == null ? void 0x0 : _0x4aace1['starsWithoutReviews']) === ![];
        _0x5d93c4 = (_0x4aace1 == null ? void 0x0 : _0x4aace1['starsWithoutReviews']) === ![];
        _0x32603d = (_0x4aace1 == null ? void 0x0 : _0x4aace1['starsInBox']) === ![];
    }
    if (!_0x12ae51 && !_0x32603d) {
        useCollectionStarSection(_0x567c9c, _0x5d93c4);
    }
    _0x2175a9['useEffect'](() => {
        _0x55e20b['getStorePreferences']()['then'](_0x19802d => {
            const {
                theme: _0x53360f,
                theme_preferences: _0x3ae8af
            } = _0x19802d;
            _0xd09f1c(_0x53360f);
            if (!_0x3ae8af || !_0x1734b2)
                return;
            _0x1734b2(_0x3ae8af);
        })['catch'](() => {
            _0xd09f1c('default');
        });
    }, []);
    _0x2175a9['useEffect'](() => {
        var _0x5d0496;
        if (_0x567c9c && _0x12ae51 && _0x3da616 && _0x173cee) {
            (_0x5d0496 = document['querySelector']('#bk-reviews-root')) == null ? void 0x0 : _0x5d0496['setAttribute']('data-theme', _0x3da616);
            if (!_0x47c987) {
                insertStarSection(_0x3da616);
                insertReviewSection(_0x3da616);
            }
        }
    }, [
        _0x3da616,
        _0x173cee
    ]);
    const _0x41db5d = ![];
    return _0x41db5d && _0x3da616 !== void 0x0 ? _0xb4c941['jsxs'](_0xb4c941['Fragment'], {
        'children': [
            _0xb4c941['jsx'](_0x2c50b2, {
                'theme': _0x3da616,
                'extension': 'star-section'
            }),
            _0xb4c941['jsx'](_0x2c50b2, {
                'theme': _0x3da616,
                'extension': 'review-section'
            })
        ]
    }) : null;
}
_0x3b5aaa['createRoot'](document['getElementById']('bk-reviews-root'))['render'](_0xb4c941['jsx'](_0x3be18c['StrictMode'], {
    'children': _0xb4c941['jsx'](_0x4a7679, {
        'i18n': _0x2c9f34,
        'children': _0xb4c941['jsx'](_0x5c431f, { 'children': _0xb4c941['jsx'](_0x5a6423, { 'children': _0xb4c941['jsx'](_0x2c7819, { 'children': _0xb4c941['jsx'](App, {}) }) }) })
    })
}));