var rule = {
    title: '爱壹帆',
    host: 'https://www.yfsp.tv',
    homeUrl: '/',
    url: '/list/fyclass',
    detailUrl: '/play/fyid',
    searchUrl: '**',
    searchable: 1,
    quickSearch: 1,
    filterable: 1,
    timeout: 30000,
    class_name: '电影&电视剧&综艺&动漫&纪录片&短剧',
    class_url: 'movie&drama&variety&anime&documentary&short',
    filter: {
        movie: [
            {key: 'region', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '大陆'}, {n: '香港', v: '香港'}, {n: '台湾', v: '台湾'}, {n: '美国', v: '美国'}, {n: '韩国', v: '韩国'}, {n: '日本', v: '日本'}, {n: '泰国', v: '泰国'}, {n: '英国', v: '英国'}, {n: '其他', v: '其他'}]},
            {key: 'label', name: '类型', value: [{n: '全部', v: ''}, {n: '喜剧', v: '喜剧'}, {n: '爱情', v: '爱情'}, {n: '动作', v: '动作'}, {n: '犯罪', v: '犯罪'}, {n: '科幻', v: '科幻'}, {n: '奇幻', v: '奇幻'}, {n: '冒险', v: '冒险'}, {n: '灾难', v: '灾难'}, {n: '惊悚', v: '惊悚'}, {n: '剧情', v: '剧情'}, {n: '战争', v: '战争'}, {n: '悬疑', v: '悬疑'}, {n: '动画', v: '动画'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}, {n: '2021', v: '2021'}, {n: '2020', v: '2020'}, {n: '2019', v: '2019'}, {n: '2018', v: '2018'}, {n: '2017', v: '2017'}, {n: '2016', v: '2016'}]},
            {key: 'language', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '国语'}, {n: '英语', v: '英语'}, {n: '粤语', v: '粤语'}, {n: '韩语', v: '韩语'}, {n: '日语', v: '日语'}, {n: '其它', v: '其它'}]},
            {key: 'orderBy', name: '排序', value: [{n: '时间', v: '0'}, {n: '人气', v: '1'}, {n: '评分', v: '2'}]}
        ],
        drama: [
            {key: 'region', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '大陆'}, {n: '香港', v: '香港'}, {n: '台湾', v: '台湾'}, {n: '日本', v: '日本'}, {n: '韩国', v: '韩国'}, {n: '美国', v: '美国'}, {n: '泰国', v: '泰国'}, {n: '英国', v: '英国'}, {n: '新加坡', v: '新加坡'}, {n: '其他', v: '其他'}]},
            {key: 'label', name: '类型', value: [{n: '全部', v: ''}, {n: '偶像', v: '偶像'}, {n: '爱情', v: '爱情'}, {n: '言情', v: '言情'}, {n: '古装', v: '古装'}, {n: '历史', v: '历史'}, {n: '玄幻', v: '玄幻'}, {n: '谍战', v: '谍战'}, {n: '历险', v: '历险'}, {n: '都市', v: '都市'}, {n: '科幻', v: '科幻'}, {n: '军旅', v: '军旅'}, {n: '喜剧', v: '喜剧'}, {n: '武侠', v: '武侠'}, {n: '家庭', v: '家庭'}, {n: '战争', v: '战争'}, {n: '悬疑', v: '悬疑'}, {n: '剧情', v: '剧情'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}, {n: '2021', v: '2021'}, {n: '2020', v: '2020'}, {n: '2019', v: '2019'}, {n: '2018', v: '2018'}, {n: '2017', v: '2017'}, {n: '2016', v: '2016'}]},
            {key: 'language', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '国语'}, {n: '英语', v: '英语'}, {n: '粤语', v: '粤语'}, {n: '韩语', v: '韩语'}, {n: '日语', v: '日语'}, {n: '其它', v: '其它'}]},
            {key: 'orderBy', name: '排序', value: [{n: '时间', v: '0'}, {n: '人气', v: '1'}, {n: '评分', v: '2'}]}
        ],
        variety: [
            {key: 'region', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '大陆'}, {n: '香港', v: '香港'}, {n: '台湾', v: '台湾'}, {n: '日本', v: '日本'}, {n: '韩国', v: '韩国'}, {n: '欧美', v: '欧美'}, {n: '其他', v: '其他'}]},
            {key: 'label', name: '类型', value: [{n: '全部', v: ''}, {n: '真人秀', v: '真人秀'}, {n: '脱口秀', v: '脱口秀'}, {n: '访谈', v: '访谈'}, {n: '音乐', v: '音乐'}, {n: '晚会', v: '晚会'}, {n: '竞技', v: '竞技'}, {n: '情感', v: '情感'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}, {n: '2021', v: '2021'}, {n: '2020', v: '2020'}]},
            {key: 'language', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '国语'}, {n: '英语', v: '英语'}, {n: '粤语', v: '粤语'}, {n: '韩语', v: '韩语'}, {n: '日语', v: '日语'}, {n: '其它', v: '其它'}]},
            {key: 'orderBy', name: '排序', value: [{n: '时间', v: '0'}, {n: '人气', v: '1'}, {n: '评分', v: '2'}]}
        ],
        anime: [
            {key: 'region', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '大陆'}, {n: '日本', v: '日本'}, {n: '韩国', v: '韩国'}, {n: '欧美', v: '欧美'}, {n: '其他', v: '其他'}]},
            {key: 'label', name: '类型', value: [{n: '全部', v: ''}, {n: '热血', v: '热血'}, {n: '格斗', v: '格斗'}, {n: '机战', v: '机战'}, {n: '少女', v: '少女'}, {n: '竞技', v: '竞技'}, {n: '科幻', v: '科幻'}, {n: '魔幻', v: '魔幻'}, {n: '搞笑', v: '搞笑'}, {n: '推理', v: '推理'}, {n: '冒险', v: '冒险'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}, {n: '2021', v: '2021'}, {n: '2020', v: '2020'}]},
            {key: 'language', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '国语'}, {n: '英语', v: '英语'}, {n: '韩语', v: '韩语'}, {n: '日语', v: '日语'}, {n: '其它', v: '其它'}]},
            {key: 'orderBy', name: '排序', value: [{n: '时间', v: '0'}, {n: '人气', v: '1'}, {n: '评分', v: '2'}]}
        ],
        documentary: [
            {key: 'region', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '大陆'}, {n: '香港', v: '香港'}, {n: '台湾', v: '台湾'}, {n: '美国', v: '美国'}, {n: '英国', v: '英国'}, {n: '日本', v: '日本'}, {n: '韩国', v: '韩国'}, {n: '其他', v: '其他'}]},
            {key: 'label', name: '类型', value: [{n: '全部', v: ''}, {n: '文化', v: '文化'}, {n: '探索', v: '探索'}, {n: '军事', v: '军事'}, {n: '揭秘', v: '揭秘'}, {n: '科技', v: '科技'}, {n: '历史', v: '历史'}, {n: '人物', v: '人物'}, {n: '自然', v: '自然'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}, {n: '2021', v: '2021'}, {n: '2020', v: '2020'}]},
            {key: 'language', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '国语'}, {n: '英语', v: '英语'}, {n: '其它', v: '其它'}]},
            {key: 'orderBy', name: '排序', value: [{n: '时间', v: '0'}, {n: '人气', v: '1'}, {n: '评分', v: '2'}]}
        ],
        short: [
            {key: 'region', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '大陆'}]},
            {key: 'label', name: '类型', value: [{n: '全部', v: ''}, {n: '现代都市', v: '现代都市'}, {n: '反转爽剧', v: '反转爽剧'}, {n: '年代穿越', v: '年代穿越'}, {n: '古装仙侠', v: '古装仙侠'}, {n: '女频恋爱', v: '女频恋爱'}, {n: '脑洞悬疑', v: '脑洞悬疑'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}, {n: '2021', v: '2021'}, {n: '2020', v: '2020'}]},
            {key: 'orderBy', name: '排序', value: [{n: '时间', v: '0'}, {n: '人气', v: '1'}, {n: '评分', v: '2'}]}
        ]
    },
    filter_def: {
        movie: {orderBy: '0'},
        drama: {orderBy: '0'},
        variety: {orderBy: '0'},
        anime: {orderBy: '0'},
        documentary: {orderBy: '0'},
        short: {orderBy: '0', region: '大陆'}
    },
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0',
        'Referer': 'https://www.yfsp.tv/'
    },
    play_parse: false,
    推荐: `js:
        function yfspStrip(s) {
            return (s || '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\\s+/g, ' ').trim();
        }
        function yfspInject(html) {
            var m = html.match(/var\\s+injectJson\\s*=\\s*(\\{[\\s\\S]*?\\});\\s*<\\/script>/);
            return m ? JSON.parse(m[1]) : {};
        }
        function yfspVod(it) {
            var id = it.listPath || it.key || it.secretVID || '';
            return {
                vod_id: id,
                vod_name: it.title || it.name || '',
                vod_pic: it.image || it.img || it.imgPath || '',
                vod_remarks: it.subTitle || it.lastName || it.atypeName || ''
            };
        }
        var json = yfspInject(request(input));
        var out = [], seen = {};
        Object.keys(json).forEach(function(k) {
            if (k.indexOf('slide-list') < 0 || !Array.isArray(json[k])) return;
            json[k].forEach(function(it) {
                var v = yfspVod(it);
                if (v.vod_id && v.vod_name && !seen[v.vod_id]) {
                    seen[v.vod_id] = 1;
                    out.push(v);
                }
            });
        });
        VODS = out;
    `,
    一级: `js:
        function yfspStrip(s) {
            return (s || '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\\s+/g, ' ').trim();
        }
        function yfspInject(html) {
            var m = html.match(/var\\s+injectJson\\s*=\\s*(\\{[\\s\\S]*?\\});\\s*<\\/script>/);
            return m ? JSON.parse(m[1]) : {};
        }
        function yfspVod(it) {
            var id = it.listPath || it.key || it.secretVID || '';
            return {
                vod_id: id,
                vod_name: it.title || it.name || '',
                vod_pic: it.image || it.img || it.imgPath || '',
                vod_remarks: it.subTitle || it.lastName || it.atypeName || ''
            };
        }
        function yfspPConfig() {
            var j = yfspInject(request('https://www.yfsp.tv/list/drama', {headers: rule.headers}));
            var pc = j.config && j.config[0] && j.config[0].pConfig ? j.config[0].pConfig : {};
            var pri = pc.privateKey;
            if (pri && pri.length && typeof pri !== 'string') pri = pri[0];
            return {pub: pc.publicKey || '', pri: pri || ''};
        }
        function yfspQuery(url) {
            var p = url.indexOf('?');
            if (p < 0) return '';
            var arr = url.substring(p + 1).split('&'), out = '';
            for (var i = 0; i < arr.length; i++) {
                var kv = arr[i].split('=');
                out += kv[0];
                for (var j = 1; j < kv.length; j++) out += '=' + decodeURIComponent(kv[j]).split('+').join(' ');
                out += '&';
            }
            return out ? out.substring(0, out.length - 1) : '';
        }
        function yfspSign(url) {
            var k = yfspPConfig();
            var q = yfspQuery(url).toLowerCase();
            return url + '&vv=' + md5(k.pub + '&' + q + '&' + k.pri) + '&pub=' + encodeURIComponent(k.pub);
        }
        function yfspSearch(cate, page, fl) {
            fl = fl || {};
            var qs = [
                'cinema=1',
                'tags=',
                'page=' + encodeURIComponent(page || 1),
                'size=24',
                'orderby=' + encodeURIComponent(fl.orderBy || 0),
                'desc=0',
                'cid=' + encodeURIComponent(cate || ''),
                'label=' + encodeURIComponent(fl.label || ''),
                'year=' + encodeURIComponent(fl.year || ''),
                'language=' + encodeURIComponent(fl.language || ''),
                'region=' + encodeURIComponent(fl.region || ''),
                'isserial=-1',
                'isIndex=-1',
                'isfree=-1',
                'vipResource=',
                'isShortVideo='
            ].join('&');
            var api = yfspSign('https://m10.yfsp.tv/api/list/Search?' + qs);
            var data = JSON.parse(request(api, {headers: rule.headers}));
            var info = data && data.data && data.data.info && data.data.info[0] ? data.data.info[0] : {};
            return info.result || [];
        }
        var cate = typeof MY_CATE !== 'undefined' ? MY_CATE : 'drama';
        var page = typeof MY_PAGE !== 'undefined' ? MY_PAGE : 1;
        var fl = typeof MY_FL !== 'undefined' ? MY_FL : {};
        var hasFilter = fl && (fl.region || fl.label || fl.year || fl.language || page > 1);
        var out = [], seen = {};
        if (page == 1) {
            var htmlUrl = 'https://www.yfsp.tv/list/' + cate;
            var q = [];
            if (fl.region) q.push('region=' + encodeURIComponent(fl.region));
            if (fl.label) q.push('tag=' + encodeURIComponent(fl.label));
            if (fl.year) q.push('year=' + encodeURIComponent(fl.year));
            if (fl.language) q.push('language=' + encodeURIComponent(fl.language));
            if (q.length) htmlUrl += '?' + q.join('&');
            var json = yfspInject(request(htmlUrl, {headers: rule.headers}));
            Object.keys(json).forEach(function(k) {
                if (k.indexOf('slide-list') < 0 || !Array.isArray(json[k])) return;
                json[k].forEach(function(it) {
                    var v = yfspVod(it);
                    if (v.vod_id && v.vod_name && !seen[v.vod_id]) {
                        seen[v.vod_id] = 1;
                        out.push(v);
                    }
                });
            });
        }
        if (!out.length && page > 1) {
            var list = yfspSearch(cate, page, fl);
            for (var i = 0; i < list.length; i++) {
                var v = yfspVod(list[i]);
                if (v.vod_id && v.vod_name && !seen[v.vod_id]) {
                    seen[v.vod_id] = 1;
                    out.push(v);
                }
            }
        }
        VODS = out;
    `,
    二级: `js:
        function yfspStrip(s) {
            return (s || '').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\\s+/g, ' ').trim();
        }
        function yfspInject(html) {
            var m = html.match(/var\\s+injectJson\\s*=\\s*(\\{[\\s\\S]*?\\});\\s*<\\/script>/);
            return m ? JSON.parse(m[1]) : {};
        }
        function yfspPConfig(pageUrl) {
            var j = yfspInject(request(pageUrl || 'https://www.yfsp.tv/', {headers: rule.headers}));
            var pc = j.config && j.config[0] && j.config[0].pConfig ? j.config[0].pConfig : {};
            var pri = pc.privateKey;
            if (pri && pri.length && typeof pri !== 'string') pri = pri[0];
            return {pub: pc.publicKey || '', pri: pri || ''};
        }
        function yfspQuery(url) {
            var p = url.indexOf('?');
            if (p < 0) return '';
            var arr = url.substring(p + 1).split('&'), out = '';
            for (var i = 0; i < arr.length; i++) {
                var kv = arr[i].split('=');
                out += kv[0];
                for (var j = 1; j < kv.length; j++) out += '=' + decodeURIComponent(kv[j]).split('+').join(' ');
                out += '&';
            }
            return out ? out.substring(0, out.length - 1) : '';
        }
        function yfspSign(url, pageUrl) {
            var k = yfspPConfig(pageUrl);
            var q = yfspQuery(url).toLowerCase();
            return url + '&vv=' + md5(k.pub + '&' + q + '&' + k.pri) + '&pub=' + encodeURIComponent(k.pub);
        }
        function yfspApi(path, qs, pageUrl) {
            return JSON.parse(request(yfspSign('https://m10.yfsp.tv/v3/' + path + '?' + qs, pageUrl), {headers: rule.headers}));
        }
        var key = (input.match(/\\/play\\/([^/?#]+)/) || [])[1] || input;
        var pageUrl = 'https://www.yfsp.tv/play/' + key;
        var detailQs = [
            'ispath=false',
            'cinema=1',
            'device=1',
            'player=CkPlayer',
            'tech=HLS',
            'country=HU',
            'lang=cns',
            'v=1',
            'id=' + encodeURIComponent(key),
            'region=GL.'
        ].join('&');
        var data = yfspApi('video/detail', detailQs, pageUrl);
        var info = data && data.data && data.data.info && data.data.info[0] ? data.data.info[0] : {};
        var cid = info.cidMapper || info.cid || '';
        var playQs = 'cinema=1&vid=' + encodeURIComponent(key) + '&lsk=1&taxis=' + encodeURIComponent(info.taxis || 0) + '&cid=' + encodeURIComponent(cid);
        var plist = yfspApi('video/languagesplaylist', playQs, pageUrl);
        var pinfo = plist && plist.data && plist.data.info && plist.data.info[0] ? plist.data.info[0] : {};
        var raw = pinfo.playList || pinfo.guessList || [];
        var eps = [];
        for (var i = 0; i < raw.length; i++) {
            if (!raw[i] || !raw[i].key) continue;
            eps.push((raw[i].name || ('第' + (i + 1) + '集')) + '$' + raw[i].key);
        }
        if (!eps.length) eps.push('播放$' + key);
        VOD = {
            vod_id: key,
            vod_name: info.title || key,
            vod_pic: info.imgPath || '',
            type_name: info.videoType || info.channel || '',
            vod_year: info.post_Year || info.year || '',
            vod_area: info.regional || '',
            vod_remarks: info.lastName || '',
            vod_actor: info.stars || '',
            vod_director: info.directors || '',
            vod_content: yfspStrip(info.contxt || ''),
            vod_play_from: '爱壹帆',
            vod_play_url: eps.join('#')
        };
    `,
    搜索: `js:
        function yfspInject(html) {
            var m = html.match(/var\\s+injectJson\\s*=\\s*(\\{[\\s\\S]*?\\});\\s*<\\/script>/);
            return m ? JSON.parse(m[1]) : {};
        }
        function yfspPConfig() {
            var j = yfspInject(request('https://www.yfsp.tv/', {headers: rule.headers}));
            var pc = j.config && j.config[0] && j.config[0].pConfig ? j.config[0].pConfig : {};
            var pri = pc.privateKey;
            if (pri && pri.length && typeof pri !== 'string') pri = pri[0];
            return {pub: pc.publicKey || '', pri: pri || ''};
        }
        function yfspQuery(url) {
            var p = url.indexOf('?');
            var arr = url.substring(p + 1).split('&'), out = '';
            for (var i = 0; i < arr.length; i++) {
                var kv = arr[i].split('=');
                out += kv[0];
                for (var j = 1; j < kv.length; j++) out += '=' + decodeURIComponent(kv[j]).split('+').join(' ');
                out += '&';
            }
            return out ? out.substring(0, out.length - 1) : '';
        }
        function yfspSign(url) {
            var k = yfspPConfig();
            return url + '&vv=' + md5(k.pub + '&' + yfspQuery(url).toLowerCase() + '&' + k.pri) + '&pub=' + encodeURIComponent(k.pub);
        }
        function yfspVod(it) {
            return {vod_id: it.key || it.listPath || '', vod_name: it.title || '', vod_pic: it.image || it.imgPath || '', vod_remarks: it.lastName || it.atypeName || ''};
        }
        var wd = typeof KEY !== 'undefined' ? KEY : (typeof MY_KEY !== 'undefined' ? MY_KEY : '');
        var pg = typeof MY_PAGE !== 'undefined' ? MY_PAGE : 1;
        var qs = 'cinema=1&tags=' + encodeURIComponent(wd) + '&page=' + encodeURIComponent(pg) + '&size=24&orderby=0&desc=0&cid=&label=&year=&language=&region=&isserial=-1&isIndex=-1&isfree=-1&vipResource=&isShortVideo=';
        var data = JSON.parse(request(yfspSign('https://m10.yfsp.tv/api/list/Search?' + qs), {headers: rule.headers}));
        var list = data && data.data && data.data.info && data.data.info[0] && data.data.info[0].result ? data.data.info[0].result : [];
        var out = [], seen = {};
        for (var i = 0; i < list.length; i++) {
            var v = yfspVod(list[i]);
            if (v.vod_id && v.vod_name && !seen[v.vod_id]) {
                seen[v.vod_id] = 1;
                out.push(v);
            }
        }
        VODS = out;
    `,
    lazy: `js:
        function yfspInject(html) {
            var m = html.match(/var\\s+injectJson\\s*=\\s*(\\{[\\s\\S]*?\\});\\s*<\\/script>/);
            return m ? JSON.parse(m[1]) : {};
        }
        function yfspPConfig() {
            var j = yfspInject(request('https://www.yfsp.tv/', {headers: rule.headers}));
            var pc = j.config && j.config[0] && j.config[0].pConfig ? j.config[0].pConfig : {};
            var pri = pc.privateKey;
            if (pri && pri.length && typeof pri !== 'string') pri = pri[0];
            return {pub: pc.publicKey || '', pri: pri || ''};
        }
        function yfspQuery(url) {
            var p = url.indexOf('?');
            var arr = url.substring(p + 1).split('&'), out = '';
            for (var i = 0; i < arr.length; i++) {
                var kv = arr[i].split('=');
                out += kv[0];
                for (var j = 1; j < kv.length; j++) out += '=' + decodeURIComponent(kv[j]).split('+').join(' ');
                out += '&';
            }
            return out ? out.substring(0, out.length - 1) : '';
        }
        function yfspSign(url) {
            var k = yfspPConfig();
            return url + '&vv=' + md5(k.pub + '&' + yfspQuery(url).toLowerCase() + '&' + k.pri) + '&pub=' + encodeURIComponent(k.pub);
        }
        function yfspPickUrl(arr) {
            var mp4 = '', hls = '', other = '';
            arr = arr || [];
            for (var i = 0; i < arr.length; i++) {
                var item = arr[i] || {};
                var u = item.result || item.dashResult || item.rtmp || '';
                if (!u) continue;
                if (!mp4 && /\\.mp4(\\?|$)/i.test(u)) mp4 = u;
                if (!hls && (/\\.m3u8(\\?|$)/i.test(u) || item.isHls)) hls = u;
                if (!other) other = u;
            }
            return mp4 || hls || other;
        }
        function yfspTryPlay(ep, sharpness, line, master) {
            var base = [
                'cinema=1',
                'id=' + encodeURIComponent(ep),
                'lang=cns',
                'usersign=1',
                'region=GL.',
                'device=1',
                'a=0',
                'isMasterSupport=' + master,
                'sharpness=' + encodeURIComponent(sharpness),
                'line=' + encodeURIComponent(line)
            ].join('&');
            var data = JSON.parse(request(yfspSign('https://m10.yfsp.tv/v3/video/play?' + base), {headers: rule.headers}));
            var info = data && data.data && data.data.info && data.data.info[0] ? data.data.info[0] : {};
            return yfspPickUrl(info.flvPathList || []);
        }
        var ep = input, url = '';
        var tries = [
            ['1080', '', 1],
            ['1080', '0', 1],
            ['1080', '', 0],
            ['1080', '0', 0],
            ['720', '', 1],
            ['720', '0', 1],
            ['720', '', 0],
            ['720', '0', 0]
        ];
        for (var i = 0; i < tries.length && !url; i++) {
            try { url = yfspTryPlay(ep, tries[i][0], tries[i][1], tries[i][2]); } catch (e) {}
        }
        var h = JSON.stringify({'User-Agent': 'Mozilla/5.0', 'Referer': 'https://www.yfsp.tv/'});
        if (/\\.m3u8|\\.mp4/i.test(url)) {
            input = {parse: 0, jx: 0, url: url, header: h};
        } else {
            input = {parse: 0, jx: 0, url: 'toast://爱壹帆播放接口未返回1080或720直链', header: h};
        }
    `
};
