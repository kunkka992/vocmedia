var rule = {
    title: '爱壹帆',
    host: 'https://www.yfsp.tv',
    homeUrl: '/',
    detailUrl: 'yfsp://detail/fyid',
    url: 'yfsp://list/fyclass/fypage',
    searchUrl: 'yfsp://search?wd=**',
    searchable: 1,
    quickSearch: 1,
    filterable: 1,
    play_parse: true,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
        'Referer': 'https://www.yfsp.tv/',
        'Origin': 'https://www.yfsp.tv'
    },
    class_name: '电影&电视剧&综艺&动漫&短剧',
    class_url: 'movie&drama&variety&anime&short',
    filter: {
        movie: [
            {key: 'label', name: '类型', value: [{n: '全部', v: ''}, {n: '喜剧', v: '喜剧'}, {n: '爱情', v: '爱情'}, {n: '动作', v: '动作'}, {n: '犯罪', v: '犯罪'}, {n: '科幻', v: '科幻'}, {n: '奇幻', v: '奇幻'}, {n: '冒险', v: '冒险'}, {n: '灾难', v: '灾难'}, {n: '恐怖', v: '恐怖'}, {n: '惊悚', v: '惊悚'}, {n: '剧情', v: '剧情'}, {n: '战争', v: '战争'}, {n: '歌舞', v: '歌舞'}, {n: '经典', v: '经典'}, {n: '悬疑', v: '悬疑'}, {n: '动画', v: '动画'}, {n: '同性', v: '同性'}, {n: '网络电影', v: '网络电影'}]},
            {key: 'region', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '大陆'}, {n: '香港', v: '香港'}, {n: '台湾', v: '台湾'}, {n: '日本', v: '日本'}, {n: '韩国', v: '韩国'}, {n: '欧美', v: '欧美'}, {n: '英国', v: '英国'}, {n: '泰国', v: '泰国'}, {n: '其它', v: '其它'}]},
            {key: 'language', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '国语'}, {n: '粤语', v: '粤语'}, {n: '英语', v: '英语'}, {n: '韩语', v: '韩语'}, {n: '日语', v: '日语'}, {n: '西班牙语', v: '西班牙语'}, {n: '法语', v: '法语'}, {n: '德语', v: '德语'}, {n: '意大利语', v: '意大利语'}, {n: '泰国语', v: '泰国语'}, {n: '其它', v: '其它'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}, {n: '2021', v: '2021'}, {n: '2020', v: '2020'}, {n: '2019', v: '2019'}, {n: '2018', v: '2018'}, {n: '2017', v: '2017'}, {n: '2016', v: '2016'}, {n: '2015', v: '2015'}, {n: '更早', v: 'earlier'}]},
            {key: 'vipResource', name: '画质', value: [{n: '全部', v: ''}, {n: '1080P', v: '1080P'}, {n: '720P', v: '720P'}, {n: '4K', v: '4K'}]},
            {key: 'orderBy', name: '排序', value: [{n: '最新', v: '4'}, {n: '人气', v: '0'}, {n: '评分', v: '2'}]}
        ],
        drama: [
            {key: 'label', name: '类型', value: [{n: '全部', v: ''}, {n: '国产剧', v: '国产剧'}, {n: '港台剧', v: '港台剧'}, {n: '韩剧', v: '韩剧'}, {n: '欧美剧', v: '欧美剧'}, {n: '英剧', v: '英剧'}, {n: '日剧', v: '日剧'}, {n: '古装', v: '古装'}, {n: '言情', v: '言情'}, {n: '武侠', v: '武侠'}, {n: '偶像', v: '偶像'}, {n: '家庭', v: '家庭'}, {n: '青春', v: '青春'}, {n: '都市', v: '都市'}, {n: '喜剧', v: '喜剧'}, {n: '战争', v: '战争'}, {n: '军旅', v: '军旅'}, {n: '谍战', v: '谍战'}, {n: '悬疑', v: '悬疑'}, {n: '罪案', v: '罪案'}, {n: '穿越', v: '穿越'}, {n: '宫廷', v: '宫廷'}, {n: '历史', v: '历史'}, {n: '玄幻', v: '玄幻'}, {n: '历险', v: '历险'}, {n: '科幻', v: '科幻'}, {n: '爱情', v: '爱情'}, {n: '商战', v: '商战'}, {n: '警匪', v: '警匪'}, {n: '动作', v: '动作'}, {n: '惊悚', v: '惊悚'}, {n: '剧情', v: '剧情'}, {n: '奇幻', v: '奇幻'}]},
            {key: 'region', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '大陆'}, {n: '香港', v: '香港'}, {n: '台湾', v: '台湾'}, {n: '日本', v: '日本'}, {n: '韩国', v: '韩国'}, {n: '欧美', v: '欧美'}, {n: '英国', v: '英国'}, {n: '泰国', v: '泰国'}, {n: '其它', v: '其它'}]},
            {key: 'language', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '国语'}, {n: '粤语', v: '粤语'}, {n: '英语', v: '英语'}, {n: '韩语', v: '韩语'}, {n: '日语', v: '日语'}, {n: '其它', v: '其它'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}, {n: '2021', v: '2021'}, {n: '2020', v: '2020'}, {n: '2019', v: '2019'}, {n: '2018', v: '2018'}, {n: '更早', v: 'earlier'}]},
            {key: 'status', name: '状态', value: [{n: '全部', v: '-1'}, {n: '全集', v: '0'}, {n: '连载中', v: '1'}]},
            {key: 'orderBy', name: '排序', value: [{n: '最新', v: '4'}, {n: '人气', v: '0'}, {n: '评分', v: '2'}]}
        ],
        variety: [
            {key: 'label', name: '类型', value: [{n: '全部', v: ''}, {n: '竞技', v: '竞技'}, {n: '晚会', v: '晚会'}, {n: '体育', v: '体育'}, {n: '网综', v: '网综'}, {n: '情感', v: '情感'}, {n: '访谈', v: '访谈'}, {n: '纪实', v: '纪实'}, {n: '生活', v: '生活'}, {n: '时尚', v: '时尚'}, {n: '选秀', v: '选秀'}, {n: '真人秀', v: '真人秀'}, {n: '搞笑', v: '搞笑'}, {n: '脱口秀', v: '脱口秀'}, {n: '演唱会', v: '演唱会'}]},
            {key: 'region', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '大陆'}, {n: '香港', v: '香港'}, {n: '台湾', v: '台湾'}, {n: '日本', v: '日本'}, {n: '韩国', v: '韩国'}, {n: '欧美', v: '欧美'}, {n: '英国', v: '英国'}, {n: '泰国', v: '泰国'}, {n: '其它', v: '其它'}]},
            {key: 'language', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '国语'}, {n: '粤语', v: '粤语'}, {n: '英语', v: '英语'}, {n: '韩语', v: '韩语'}, {n: '日语', v: '日语'}, {n: '其它', v: '其它'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}, {n: '2021', v: '2021'}, {n: '2020', v: '2020'}, {n: '更早', v: 'earlier'}]},
            {key: 'orderBy', name: '排序', value: [{n: '最新', v: '4'}, {n: '人气', v: '0'}, {n: '评分', v: '2'}]}
        ],
        anime: [
            {key: 'label', name: '类型', value: [{n: '全部', v: ''}, {n: '热血', v: '热血'}, {n: '格斗', v: '格斗'}, {n: '机战', v: '机战'}, {n: '少女', v: '少女'}, {n: '少儿', v: '少儿'}, {n: '竞技', v: '竞技'}, {n: '科幻', v: '科幻'}, {n: '魔幻', v: '魔幻'}, {n: '爆笑', v: '爆笑'}, {n: '推理', v: '推理'}, {n: '灵异', v: '灵异'}, {n: '剧场版', v: '剧场版'}, {n: '穿越', v: '穿越'}, {n: '泡面', v: '泡面'}, {n: '治愈', v: '治愈'}, {n: '校园', v: '校园'}, {n: '恋爱', v: '恋爱'}, {n: '冒险', v: '冒险'}, {n: '耽美', v: '耽美'}]},
            {key: 'region', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '大陆'}, {n: '香港', v: '香港'}, {n: '台湾', v: '台湾'}, {n: '日本', v: '日本'}, {n: '韩国', v: '韩国'}, {n: '欧美', v: '欧美'}, {n: '英国', v: '英国'}, {n: '其它', v: '其它'}]},
            {key: 'language', name: '语言', value: [{n: '全部', v: ''}, {n: '国语', v: '国语'}, {n: '粤语', v: '粤语'}, {n: '英语', v: '英语'}, {n: '韩语', v: '韩语'}, {n: '日语', v: '日语'}, {n: '其它', v: '其它'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '2022', v: '2022'}, {n: '2021', v: '2021'}, {n: '2020', v: '2020'}, {n: '更早', v: 'earlier'}]},
            {key: 'status', name: '状态', value: [{n: '全部', v: '-1'}, {n: '全集', v: '0'}, {n: '连载中', v: '1'}]},
            {key: 'orderBy', name: '排序', value: [{n: '最新', v: '4'}, {n: '人气', v: '0'}, {n: '评分', v: '2'}]}
        ],
        short: [
            {key: 'label', name: '类型', value: [{n: '全部', v: ''}, {n: '现代都市', v: '现代都市'}, {n: '反转爽剧', v: '反转爽剧'}, {n: '年代穿越', v: '年代穿越'}, {n: '古装仙侠', v: '古装仙侠'}, {n: '女频恋爱', v: '女频恋爱'}, {n: '脑洞悬疑', v: '脑洞悬疑'}]},
            {key: 'region', name: '地区', value: [{n: '全部', v: ''}, {n: '大陆', v: '大陆'}]},
            {key: 'year', name: '年份', value: [{n: '全部', v: ''}, {n: '2026', v: '2026'}, {n: '2025', v: '2025'}, {n: '2024', v: '2024'}, {n: '2023', v: '2023'}, {n: '更早', v: 'earlier'}]},
            {key: 'orderBy', name: '排序', value: [{n: '最新', v: '4'}, {n: '人气', v: '0'}, {n: '评分', v: '2'}]}
        ]
    },
    filter_def: {
        movie: {orderBy: '4'},
        drama: {orderBy: '4', status: '-1'},
        variety: {orderBy: '4'},
        anime: {orderBy: '4', status: '-1'},
        short: {orderBy: '4'}
    },
    预处理: `js:
        rule.publicKey = 'CJSuC3aoC3GmDYumE3DVJLbVCJOnBZ4qCYunDJCkEJTVOZ0qOZOrP3HYD6HbD3CmPM4oOJLaCpXXD65aP65YPJ5VE3WnDZLXC39XDJLbC30tP6CnC3KmD3CmDZOqE6OrDJ4';
        rule.privateKey = 'SuC3JSuC3aoC3GmDYumE';
        try {
            var html = request(rule.host + '/list/movie', {headers: rule.headers});
            var m = html.match(/var\\s+injectJson\\s*=\\s*(\\{[\\s\\S]*?\\});\\s*<\\/script>/);
            if (m) {
                var cfg = JSON.parse(m[1]).config[0].pConfig;
                rule.publicKey = cfg.publicKey || rule.publicKey;
                rule.privateKey = (cfg.privateKey || [])[0] || rule.privateKey;
            }
        } catch (e) {}
    `,
    推荐: `js:
        function yfspQuery(url) {
            var q = (url.split('?')[1] || '').split('&'), out = [];
            for (var i = 0; i < q.length; i++) {
                var p = q[i].split('=');
                if (p[0]) out.push(p[0] + '=' + decodeURIComponent((p[1] || '').replace(/\\+/g, ' ')));
            }
            return out.join('&');
        }
        function yfspSign(url) {
            var vv = md5(rule.publicKey + '&' + yfspQuery(url).toLowerCase() + '&' + rule.privateKey);
            return url + '&vv=' + vv + '&pub=' + encodeURIComponent(rule.publicKey);
        }
        function yfspVod(it) {
            return {
                vod_id: it.key || '',
                vod_name: it.title || '',
                vod_pic: it.image || it.imgPath || '',
                vod_remarks: it.lastName || it.vipResource || it.rating || ''
            };
        }
        var url = 'https://m10.yfsp.tv/api/list/Search?cinema=1&tags=&page=1&size=24&orderby=4&desc=1&cid=0,1,4&label=&year=&language=&region=大陆&isserial=-1&isIndex=-1&isfree=-1&vipResource=';
        var json = JSON.parse(request(yfspSign(url), {headers: rule.headers}));
        VODS = ((json.data.info[0] || {}).result || []).map(yfspVod);
    `,
    一级: `js:
        function yfspQuery(url) {
            var q = (url.split('?')[1] || '').split('&'), out = [];
            for (var i = 0; i < q.length; i++) {
                var p = q[i].split('=');
                if (p[0]) out.push(p[0] + '=' + decodeURIComponent((p[1] || '').replace(/\\+/g, ' ')));
            }
            return out.join('&');
        }
        function yfspSign(url) {
            var vv = md5(rule.publicKey + '&' + yfspQuery(url).toLowerCase() + '&' + rule.privateKey);
            return url + '&vv=' + vv + '&pub=' + encodeURIComponent(rule.publicKey);
        }
        function yfspVod(it) {
            return {
                vod_id: it.key || '',
                vod_name: it.title || '',
                vod_pic: it.image || it.imgPath || '',
                vod_remarks: it.lastName || it.vipResource || it.rating || ''
            };
        }
        var cids = {movie: '0,1,3', drama: '0,1,4', variety: '0,1,5', anime: '0,1,6', short: '0,1,8'};
        var pg = Number(MY_PAGE || 1), fl = MY_FL || {};
        var cid = cids[MY_CATE] || '0,1,3';
        var url = 'https://m10.yfsp.tv/api/list/Search?cinema=1'
            + '&tags='
            + '&page=' + pg
            + '&size=24'
            + '&orderby=' + (fl.orderBy || '4')
            + '&desc=1'
            + '&cid=' + cid
            + '&label=' + encodeURIComponent(fl.label || '')
            + '&year=' + encodeURIComponent(fl.year || '')
            + '&language=' + encodeURIComponent(fl.language || '')
            + '&region=' + encodeURIComponent(fl.region || '')
            + '&isserial=' + encodeURIComponent(fl.status || '-1')
            + '&isIndex=-1'
            + '&isfree=-1'
            + '&vipResource=' + encodeURIComponent(fl.vipResource || '');
        var json = JSON.parse(request(yfspSign(url), {headers: rule.headers}));
        var info = (json.data.info || [{}])[0];
        VODS = (info.result || []).map(yfspVod);
    `,
    二级: `js:
        function yfspQuery(url) {
            var q = (url.split('?')[1] || '').split('&'), out = [];
            for (var i = 0; i < q.length; i++) {
                var p = q[i].split('=');
                if (p[0]) out.push(p[0] + '=' + decodeURIComponent((p[1] || '').replace(/\\+/g, ' ')));
            }
            return out.join('&');
        }
        function yfspSign(url) {
            var vv = md5(rule.publicKey + '&' + yfspQuery(url).toLowerCase() + '&' + rule.privateKey);
            return url + '&vv=' + vv + '&pub=' + encodeURIComponent(rule.publicKey);
        }
        var id = String(input).replace('yfsp://detail/', '').split('?')[0];
        var url = 'https://m10.yfsp.tv/v3/video/detail?cinema=1&id=' + encodeURIComponent(id) + '&device=1&region=GL.';
        var json = JSON.parse(request(yfspSign(url), {headers: rule.headers}));
        var it = (json.data.info || [{}])[0] || {};
        function joinVal(v) {
            if (!v) return '';
            if (v.join) return v.join(',');
            return String(v);
        }
        var eps = [];
        try {
            var plUrl = 'https://m10.yfsp.tv/v3/video/languagesplaylist?cinema=1'
                + '&vid=' + encodeURIComponent(id)
                + '&lsk=1'
                + '&taxis=' + encodeURIComponent(it.taxis || 0)
                + '&cid=' + encodeURIComponent(it.cid || '');
            var plJson = JSON.parse(request(yfspSign(plUrl), {headers: rule.headers}));
            var playList = (((plJson.data.info || [{}])[0] || {}).playList || []);
            for (var i = 0; i < playList.length; i++) {
                if (playList[i].key) eps.push((playList[i].name || String(i + 1)) + '$' + playList[i].key + '@@0');
            }
        } catch (e) {}
        if (!eps.length) {
            eps.push('播放$' + id + '@@1');
        }
        VOD = {
            vod_id: id,
            vod_name: it.title || '',
            vod_pic: it.imgPath || '',
            type_name: it.videoType || it.channel || '',
            vod_year: it.post_Year || '',
            vod_area: it.regional || '',
            vod_lang: it.language || '',
            vod_actor: joinVal(it.stars),
            vod_director: joinVal(it.directors),
            vod_content: it.contxt || '',
            vod_remarks: it.lastName || '',
            vod_play_from: '爱壹帆',
            vod_play_url: eps.join('#')
        };
    `,
    搜索: `js:
        function yfspQuery(url) {
            var q = (url.split('?')[1] || '').split('&'), out = [];
            for (var i = 0; i < q.length; i++) {
                var p = q[i].split('=');
                if (p[0]) out.push(p[0] + '=' + decodeURIComponent((p[1] || '').replace(/\\+/g, ' ')));
            }
            return out.join('&');
        }
        function yfspSign(url) {
            var vv = md5(rule.publicKey + '&' + yfspQuery(url).toLowerCase() + '&' + rule.privateKey);
            return url + '&vv=' + vv + '&pub=' + encodeURIComponent(rule.publicKey);
        }
        function yfspVod(it) {
            return {
                vod_id: it.key || '',
                vod_name: it.title || '',
                vod_pic: it.image || it.imgPath || '',
                vod_remarks: it.lastName || it.vipResource || it.rating || ''
            };
        }
        var pg = Number(MY_PAGE || 1);
        var url = 'https://m10.yfsp.tv/api/list/Search?cinema=1&tags=' + encodeURIComponent(KEY) + '&page=' + pg + '&size=24&orderby=4&desc=1&cid=&label=&year=&language=&region=&isserial=-1&isIndex=-1&isfree=-1&vipResource=';
        var json = JSON.parse(request(yfspSign(url), {headers: rule.headers}));
        VODS = (((json.data.info || [{}])[0]).result || []).map(yfspVod);
    `,
    lazy: `js:
        function yfspQuery(url) {
            var q = (url.split('?')[1] || '').split('&'), out = [];
            for (var i = 0; i < q.length; i++) {
                var p = q[i].split('=');
                if (p[0]) out.push(p[0] + '=' + decodeURIComponent((p[1] || '').replace(/\\+/g, ' ')));
            }
            return out.join('&');
        }
        function yfspSign(url) {
            var vv = md5(rule.publicKey + '&' + yfspQuery(url).toLowerCase() + '&' + rule.privateKey);
            return url + '&vv=' + vv + '&pub=' + encodeURIComponent(rule.publicKey);
        }
        var raw = String(input).split('$').pop();
        var parts = raw.split('@@');
        var id = parts[0];
        var a = parts[1] || '0';
        var url = 'https://m10.yfsp.tv/v3/video/play?cinema=1&id=' + encodeURIComponent(id) + '&lang=none&usersign=1&region=GL.&device=1&a=' + encodeURIComponent(a) + '&isMasterSupport=1&sharpness=&line=';
        var json = JSON.parse(request(yfspSign(url), {headers: rule.headers}));
        var info = (json.data.info || [{}])[0] || {};
        var list = info.flvPathList || [];
        var play = '';
        for (var i = 0; i < list.length; i++) {
            var u = list[i].result || list[i].rtmp || '';
            if (list[i].isHls && /\\.m3u8/i.test(u) && !/\\.mp4/i.test(u)) {
                play = u;
                break;
            }
        }
        input = play ? {parse: 0, jx: 0, url: play, header: rule.headers} : {parse: 1, url: rule.host + '/play/' + id};
    `
}
