var rule = {
    title: '金牌影院',
    host: 'https://www.sdzhgt.com',
    homeUrl: '/',
    url: '/api/mw-movie/anonymous/video/list',
    searchUrl: '/api/mw-movie/anonymous/video/searchByWord',
    detailUrl: 'fyid',
    searchable: 1,
    quickSearch: 1,
    filterable: 1,
    timeout: 30000,
    play_parse: false,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0',
        'Referer': 'https://www.sdzhgt.com/'
    },
    class_name: '电影&电视剧&综艺&动漫&短剧',
    class_url: '1&2&3&4&88',
    filter: {
        '1': [
            {key: 'type', name: '分类', value: [{n: '全部', v: ''}, {n: '喜剧', v: '22'}, {n: '动作', v: '23'}, {n: '科幻', v: '30'}, {n: '爱情', v: '26'}, {n: '悬疑', v: '27'}, {n: '奇幻', v: '87'}, {n: '剧情', v: '37'}, {n: '恐怖', v: '36'}, {n: '犯罪', v: '35'}, {n: '动画', v: '33'}, {n: '惊悚', v: '34'}, {n: '战争', v: '25'}, {n: '冒险', v: '31'}, {n: '灾难', v: '81'}, {n: '伦理', v: '83'}, {n: '其他', v: '43'}]},
            {key: 'area', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '中国大陆'}, {n: '香港', v: '中国香港'}, {n: '台湾', v: '中国台湾'}, {n: '美国', v: '美国'}, {n: '日本', v: '日本'}, {n: '韩国', v: '韩国'}, {n: '印度', v: '印度'}, {n: '泰国', v: '泰国'}, {n: '英国', v: '英国'}, {n: '法国', v: '法国'}, {n: '其他', v: '其他'}]},
            {key: 'v_class', name: '剧情', value: [{n: '全部', v: ''}, {n: '爱情', v: '爱情'}, {n: '动作', v: '动作'}, {n: '喜剧', v: '喜剧'}, {n: '战争', v: '战争'}, {n: '科幻', v: '科幻'}, {n: '剧情', v: '剧情'}, {n: '武侠', v: '武侠'}, {n: '冒险', v: '冒险'}, {n: '枪战', v: '枪战'}, {n: '恐怖', v: '恐怖'}, {n: '其他', v: '其他'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}, {n: '2021', v: '2021'}, {n: '2020', v: '2020'}, {n: '2019', v: '2019'}, {n: '2018', v: '2018'}, {n: '2017', v: '2017'}, {n: '2016', v: '2016'}, {n: '2015', v: '2015'}, {n: '2014', v: '2014'}, {n: '2013', v: '2013'}, {n: '2012', v: '2012'}, {n: '2011', v: '2011'}, {n: '2010', v: '2010'}]},
            {key: 'lang', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '国语'}, {n: '英语', v: '英语'}, {n: '粤语', v: '粤语'}, {n: '韩语', v: '韩语'}, {n: '日语', v: '日语'}, {n: '泰语', v: '泰语'}, {n: '其他', v: '其他'}]},
            {key: 'sort', name: '排序', value: [{n: '时间', v: '1'}, {n: '人气', v: '2'}, {n: '评分', v: '3'}]}
        ],
        '2': [
            {key: 'type', name: '分类', value: [{n: '全部', v: ''}, {n: '国产剧', v: '14'}, {n: '欧美剧', v: '15'}, {n: '港台剧', v: '16'}, {n: '日韩剧', v: '62'}, {n: '其他剧', v: '68'}]},
            {key: 'area', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '中国大陆'}, {n: '香港', v: '中国香港'}, {n: '台湾', v: '中国台湾'}, {n: '日本', v: '日本'}, {n: '韩国', v: '韩国'}, {n: '美国', v: '美国'}, {n: '泰国', v: '泰国'}, {n: '其他', v: '其他'}]},
            {key: 'v_class', name: '剧情', value: [{n: '全部', v: ''}, {n: '古装', v: '古装'}, {n: '战争', v: '战争'}, {n: '喜剧', v: '喜剧'}, {n: '家庭', v: '家庭'}, {n: '犯罪', v: '犯罪'}, {n: '动作', v: '动作'}, {n: '奇幻', v: '奇幻'}, {n: '剧情', v: '剧情'}, {n: '历史', v: '历史'}, {n: '短片', v: '短片'}, {n: '其他', v: '其他'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}, {n: '2021', v: '2021'}, {n: '2020', v: '2020'}, {n: '2019', v: '2019'}, {n: '2018', v: '2018'}, {n: '2017', v: '2017'}, {n: '2016', v: '2016'}, {n: '2015', v: '2015'}, {n: '2014', v: '2014'}, {n: '2013', v: '2013'}, {n: '2012', v: '2012'}, {n: '2011', v: '2011'}, {n: '2010', v: '2010'}]},
            {key: 'lang', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '国语'}, {n: '英语', v: '英语'}, {n: '粤语', v: '粤语'}, {n: '韩语', v: '韩语'}, {n: '日语', v: '日语'}, {n: '泰语', v: '泰语'}, {n: '其他', v: '其他'}]},
            {key: 'sort', name: '排序', value: [{n: '时间', v: '1'}, {n: '人气', v: '2'}, {n: '评分', v: '3'}]}
        ],
        '3': [
            {key: 'type', name: '分类', value: [{n: '全部', v: ''}, {n: '国产综艺', v: '69'}, {n: '港台综艺', v: '70'}, {n: '日韩综艺', v: '72'}, {n: '欧美综艺', v: '73'}]},
            {key: 'area', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '中国大陆'}, {n: '香港', v: '中国香港'}, {n: '台湾', v: '中国台湾'}, {n: '日本', v: '日本'}, {n: '韩国', v: '韩国'}, {n: '美国', v: '美国'}, {n: '其他', v: '其他'}]},
            {key: 'v_class', name: '类型', value: [{n: '全部', v: ''}, {n: '真人秀', v: '真人秀'}, {n: '音乐', v: '音乐'}, {n: '脱口秀', v: '脱口秀'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}, {n: '2021', v: '2021'}, {n: '2020', v: '2020'}, {n: '2019', v: '2019'}, {n: '2018', v: '2018'}, {n: '2017', v: '2017'}, {n: '2016', v: '2016'}, {n: '2015', v: '2015'}, {n: '2014', v: '2014'}, {n: '2013', v: '2013'}, {n: '2012', v: '2012'}, {n: '2011', v: '2011'}, {n: '2010', v: '2010'}]},
            {key: 'lang', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '国语'}, {n: '英语', v: '英语'}, {n: '粤语', v: '粤语'}, {n: '韩语', v: '韩语'}, {n: '日语', v: '日语'}, {n: '泰语', v: '泰语'}, {n: '其他', v: '其他'}]},
            {key: 'sort', name: '排序', value: [{n: '时间', v: '1'}, {n: '人气', v: '2'}, {n: '评分', v: '3'}]}
        ],
        '4': [
            {key: 'type', name: '分类', value: [{n: '全部', v: ''}, {n: '国产动漫', v: '75'}, {n: '日韩动漫', v: '76'}, {n: '欧美动漫', v: '77'}]},
            {key: 'area', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '中国大陆'}, {n: '日本', v: '日本'}, {n: '美国', v: '美国'}, {n: '韩国', v: '韩国'}, {n: '其他', v: '其他'}]},
            {key: 'v_class', name: '类型', value: [{n: '全部', v: ''}, {n: '喜剧', v: '喜剧'}, {n: '科幻', v: '科幻'}, {n: '热血', v: '热血'}, {n: '冒险', v: '冒险'}, {n: '动作', v: '动作'}, {n: '运动', v: '运动'}, {n: '战争', v: '战争'}, {n: '动画', v: '动画'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}, {n: '2021', v: '2021'}, {n: '2020', v: '2020'}, {n: '2019', v: '2019'}, {n: '2018', v: '2018'}, {n: '2017', v: '2017'}, {n: '2016', v: '2016'}, {n: '2015', v: '2015'}, {n: '2014', v: '2014'}, {n: '2013', v: '2013'}, {n: '2012', v: '2012'}, {n: '2011', v: '2011'}, {n: '2010', v: '2010'}]},
            {key: 'lang', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '国语'}, {n: '英语', v: '英语'}, {n: '韩语', v: '韩语'}, {n: '日语', v: '日语'}, {n: '其他', v: '其他'}]},
            {key: 'sort', name: '排序', value: [{n: '时间', v: '1'}, {n: '人气', v: '2'}, {n: '评分', v: '3'}]}
        ],
        '88': [
            {key: 'area', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '中国大陆'}, {n: '其他', v: '其他'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}, {n: '2021', v: '2021'}, {n: '2020', v: '2020'}]},
            {key: 'lang', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '国语'}]},
            {key: 'sort', name: '排序', value: [{n: '时间', v: '1'}, {n: '人气', v: '2'}, {n: '评分', v: '3'}]}
        ]
    },
    filter_def: {
        1: {sort: '1'},
        2: {sort: '1'},
        3: {sort: '1'},
        4: {sort: '1'},
        88: {sort: '1'}
    },
    推荐: `js:
        var json = jpApi('/mw-movie/anonymous/video/list', {type1: 2, pageNum: 1, pageSize: 24, sort: 1});
        VODS = (((json.data || {}).list || [])).map(function(it) { return jpVod(it); });
    `,
    一级: `js:
        var fl = MY_FL || {};
        var params = {
            type1: MY_CATE,
            pageNum: MY_PAGE,
            pageSize: 24,
            type: fl.type || '',
            area: fl.area || '',
            v_class: fl.v_class || '',
            year: fl.year || '',
            lang: fl.lang || '',
            sort: fl.sort || '1'
        };
        var json = jpApi('/mw-movie/anonymous/video/list', params);
        var arr = ((json.data || {}).list || []);
        VODS = arr.map(function(it) { return jpVod(it); });
    `,
    二级: `js:
        var vodId = jpVodId(input);
        var json = jpApi('/mw-movie/anonymous/video/detail', {id: vodId});
        var it = json.data || {};
        var eps = it.episodeList || [];
        eps.sort(function(a, b) { return parseInt(a.sort || a.name || 0) - parseInt(b.sort || b.name || 0); });
        var list1080 = [];
        var list720 = [];
        eps.forEach(function(ep, idx) {
            var name = ep.name || ep.sort || (idx + 1);
            var nid = ep.nid || ep.id || '';
            if (!nid) return;
            list1080.push(name + '$' + (it.vodId || vodId) + '@' + nid + '@1080');
            list720.push(name + '$' + (it.vodId || vodId) + '@' + nid + '@720');
        });
        var remarks = it.vodRemarks || '';
        if (!remarks && it.vodSerial && it.vodTotal) remarks = '(' + it.vodSerial + '/' + it.vodTotal + ')';
        if (it.vodScore) remarks = remarks ? remarks + '  ' + it.vodScore : String(it.vodScore);
        VOD = {
            vod_id: it.vodId || vodId,
            vod_name: it.vodName || '',
            vod_pic: it.vodPic || '',
            vod_remarks: remarks,
            type_name: it.typeName || it.vodClass || '',
            vod_year: it.vodYear || (it.vodPubdate || '').slice(0, 4),
            vod_area: it.vodArea || '',
            vod_lang: it.vodLang || '',
            vod_actor: it.vodActor || '',
            vod_director: it.vodDirector || '',
            vod_content: jpText(it.vodContent || it.vodBlurb || ''),
            vod_play_from: '1080$$$720',
            vod_play_url: list1080.join('#') + '$$$' + list720.join('#')
        };
    `,
    搜索: `js:
        var json = jpApi('/mw-movie/anonymous/video/searchByWord', {keyword: KEY, pageNum: MY_PAGE, pageSize: 20});
        var data = json.data || {};
        VODS = (((data.result || {}).list || (data.typeResult || {}).list || data.list || [])).map(function(it) { return jpVod(it); });
    `,
    lazy: `js:
        var parts = input.split('@');
        var vodId = parts[0];
        var nid = parts[1];
        var want = parseInt(parts[2] || '1080');
        var json = jpApi('/mw-movie/anonymous/v2/video/episode/url', {id: vodId, nid: nid, clientType: 1});
        var arr = ((json.data || {}).list || []);
        var item = arr.find(function(x) { return parseInt(x.resolution || 0) === want && x.url; });
        if (!item && want === 1080) item = arr.find(function(x) { return parseInt(x.resolution || 0) === 720 && x.url; });
        if (!item) item = arr.find(function(x) { return (parseInt(x.resolution || 0) === 1080 || parseInt(x.resolution || 0) === 720) && x.url; });
        if (item && item.url) {
            input = {parse: 0, jx: 0, url: item.url, header: JSON.stringify({'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.sdzhgt.com/'})};
        } else {
            input = {parse: 0, jx: 0, url: 'toast://金牌影院未返回1080或720播放地址'};
        }
    `
};

function jpText(s) {
    return (s || '').replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

function jpVod(it) {
    return {
        vod_id: it.vodId || it.id || '',
        vod_name: it.vodName || it.name || '',
        vod_pic: it.vodPic || it.pic || '',
        vod_remarks: it.vodRemarks || it.vodVersion || it.remark || ''
    };
}

function jpVodId(input) {
    var s = String(input || '');
    var m = s.match(/(\d+)(?!.*\d)/);
    return m ? m[1] : s;
}

function jpApi(path, params) {
    params = jpClean(params || {});
    var url = rule.host + '/api' + path + jpQuery(params);
    var h = jpHeaders(path, params);
    var txt = request(url, {headers: h});
    return JSON.parse(txt || '{}');
}

function jpHeaders(path, params) {
    var t = String(Date.now());
    var sign = jpSign(path, params, t);
    return {
        'User-Agent': rule.headers['User-Agent'],
        'Referer': rule.headers.Referer,
        'Content-Type': 'application/json',
        'client-type': '1',
        'deviceId': '12345678-1234-4234-8234-123456789abc',
        'authorization': '',
        't': t,
        'sign': sign
    };
}

function jpSign(path, params, t) {
    var keys = Object.keys(params || {}).sort();
    var q = keys.map(function(k) { return k + '=' + params[k]; }).join('&');
    var s = (q ? q + '&' : '') + 'key=cb808529bae6b6be45ecfab29a4889bc&t=' + t;
    return sha1(md5(s));
}

function jpQuery(params) {
    var keys = Object.keys(params || {});
    if (!keys.length) return '';
    return '?' + keys.map(function(k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); }).join('&');
}

function jpClean(obj) {
    var out = {};
    Object.keys(obj || {}).forEach(function(k) {
        var v = obj[k];
        if (v === undefined || v === null || v === '' || v === 'undefined' || v === 'null') return;
        out[k] = v;
    });
    return out;
}

function sha1(msg) {
    function rotate_left(n, s) { return (n << s) | (n >>> (32 - s)); }
    function cvt_hex(val) {
        var str = '';
        for (var i = 7; i >= 0; i--) str += ((val >>> (i * 4)) & 0x0f).toString(16);
        return str;
    }
    msg = unescape(encodeURIComponent(msg));
    var blockstart, i, j;
    var W = new Array(80);
    var H0 = 0x67452301, H1 = 0xEFCDAB89, H2 = 0x98BADCFE, H3 = 0x10325476, H4 = 0xC3D2E1F0;
    var msg_len = msg.length;
    var word_array = [];
    for (i = 0; i < msg_len - 3; i += 4) {
        j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 | msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3);
        word_array.push(j);
    }
    switch (msg_len % 4) {
        case 0: i = 0x080000000; break;
        case 1: i = msg.charCodeAt(msg_len - 1) << 24 | 0x0800000; break;
        case 2: i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 0x08000; break;
        case 3: i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 0x80; break;
    }
    word_array.push(i);
    while ((word_array.length % 16) !== 14) word_array.push(0);
    word_array.push(msg_len >>> 29);
    word_array.push((msg_len << 3) & 0x0ffffffff);
    for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
        for (i = 0; i < 16; i++) W[i] = word_array[blockstart + i];
        for (i = 16; i <= 79; i++) W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
        var A = H0, B = H1, C = H2, D = H3, E = H4;
        for (i = 0; i <= 19; i++) { var temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff; E = D; D = C; C = rotate_left(B, 30); B = A; A = temp; }
        for (i = 20; i <= 39; i++) { temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff; E = D; D = C; C = rotate_left(B, 30); B = A; A = temp; }
        for (i = 40; i <= 59; i++) { temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff; E = D; D = C; C = rotate_left(B, 30); B = A; A = temp; }
        for (i = 60; i <= 79; i++) { temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff; E = D; D = C; C = rotate_left(B, 30); B = A; A = temp; }
        H0 = (H0 + A) & 0x0ffffffff; H1 = (H1 + B) & 0x0ffffffff; H2 = (H2 + C) & 0x0ffffffff; H3 = (H3 + D) & 0x0ffffffff; H4 = (H4 + E) & 0x0ffffffff;
    }
    return (cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4)).toLowerCase();
}

globalThis.jpText = jpText;
globalThis.jpVod = jpVod;
globalThis.jpVodId = jpVodId;
globalThis.jpApi = jpApi;
globalThis.jpHeaders = jpHeaders;
globalThis.jpSign = jpSign;
globalThis.jpQuery = jpQuery;
globalThis.jpClean = jpClean;
globalThis.sha1 = sha1;
