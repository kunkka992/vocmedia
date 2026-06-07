var rule = {
    title: '瓜子影视',
    host: 'https://gz360.tv',
    homeUrl: '/',
    detailUrl: 'gz360://fyid',
    url: 'gz360://fyclass/fypage',
    searchUrl: 'gz360://search?wd=**',
    searchable: 1,
    quickSearch: 1,
    filterable: 1,
    play_parse: true,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36',
        'Referer': 'https://gz360.tv/',
        'Origin': 'https://gz360.tv'
    },
    class_name: '首页推荐&电影&电视剧&综艺&动漫&短剧&Netflix&电影解说',
    class_url: 'hot102&1&2&3&4&64&netflix&73',
    filter: {},
    预处理: `js:
        var API_HOSTS = ['https://haiwaiapi.1fc8ab0.com', 'https://hyperf.718fd9f.com'];
        function apiPost(path, body) {
            var last = '';
            for (var i = 0; i < API_HOSTS.length; i++) {
                try {
                    var txt = post(API_HOSTS[i] + path, {
                        headers: {
                            'User-Agent': rule.headers['User-Agent'],
                            'Referer': rule.headers.Referer,
                            'Origin': rule.headers.Origin,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body || {})
                    });
                    last = txt;
                    var jo = JSON.parse(txt);
                    if (jo && (jo.code === 200 || jo.data)) return jo;
                } catch (e) {}
            }
            if (last) return JSON.parse(last);
            return {};
        }
        function optionList(arr) {
            var out = [];
            arr = Array.isArray(arr) ? arr : [];
            for (var i = 0; i < arr.length; i++) {
                var n = String(arr[i].name || arr[i].label || '').trim();
                var v = arr[i].value;
                if (v === undefined || v === null) v = arr[i].id || arr[i].t_id || '';
                if (n) out.push({ n: n, v: String(v) });
            }
            return out;
        }
        function addRow(rows, key, name, arr) {
            var value = optionList(arr);
            if (value.length) rows.push({ key: key, name: name, value: value });
        }
        var cond = apiPost('/Pc/Search/GetCondition', {}).data || {};
        var cols = Array.isArray(cond.column) ? cond.column : [];
        var tids = ['1', '2', '3', '4', '64', '73'];
        var filters = {};
        for (var i = 0; i < tids.length; i++) {
            var tid = tids[i], rows = [], cls = [];
            for (var j = 0; j < cols.length; j++) {
                var val = cols[j].value;
                if (val === undefined || val === null) val = cols[j].id || cols[j].t_id || '';
                if (String(val) === tid) {
                    cls = Array.isArray(cols[j].class) ? cols[j].class : [];
                    break;
                }
            }
            addRow(rows, 'class', '类型', cls);
            addRow(rows, 'area', '地区', cond.area);
            addRow(rows, 'year', '年份', cond.year);
            addRow(rows, 'lang', '语言', cond.lang);
            addRow(rows, 'sort', '排序', cond.sort);
            filters[tid] = rows;
        }
        rule.filter = filters;
    `,
    推荐: `js:
        var API_HOSTS = ['https://haiwaiapi.1fc8ab0.com', 'https://hyperf.718fd9f.com'];
        function apiPost(path, body) {
            for (var i = 0; i < API_HOSTS.length; i++) {
                try {
                    var txt = post(API_HOSTS[i] + path, {
                        headers: {
                            'User-Agent': rule.headers['User-Agent'],
                            'Referer': rule.headers.Referer,
                            'Origin': rule.headers.Origin,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body || {})
                    });
                    var jo = JSON.parse(txt);
                    if (jo && jo.data) return jo;
                } catch (e) {}
            }
            return {};
        }
        function vods(list) {
            var out = [], seen = {};
            list = Array.isArray(list) ? list : [];
            for (var i = 0; i < list.length; i++) {
                var it = list[i], id = String(it.vod_id || it.id || '');
                var name = it.vod_name || it.c_name || '';
                if (!id || !name || seen[id]) continue;
                seen[id] = 1;
                out.push({
                    vod_id: id,
                    vod_name: name,
                    vod_pic: it.vod_pic || it.c_pic || it.pic || '',
                    vod_remarks: it.new_continue || it.vod_title || it.vod_continu || it.vod_scroe || ''
                });
            }
            return out;
        }
        var jo = apiPost('/Pc/Category/GetModuleList', { show_id: 102, show_pid: 1, pageSize: 24, page: 1 });
        VODS = vods(jo.data && jo.data.list);
    `,
    一级: `js:
        var API_HOSTS = ['https://haiwaiapi.1fc8ab0.com', 'https://hyperf.718fd9f.com'];
        function apiPost(path, body) {
            for (var i = 0; i < API_HOSTS.length; i++) {
                try {
                    var txt = post(API_HOSTS[i] + path, {
                        headers: {
                            'User-Agent': rule.headers['User-Agent'],
                            'Referer': rule.headers.Referer,
                            'Origin': rule.headers.Origin,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body || {})
                    });
                    var jo = JSON.parse(txt);
                    if (jo && jo.data) return jo;
                } catch (e) {}
            }
            return {};
        }
        function vods(list) {
            var out = [], seen = {};
            list = Array.isArray(list) ? list : [];
            for (var i = 0; i < list.length; i++) {
                var it = list[i], id = String(it.vod_id || it.id || '');
                var name = it.vod_name || it.c_name || '';
                if (!id || !name || seen[id]) continue;
                seen[id] = 1;
                out.push({
                    vod_id: id,
                    vod_name: name,
                    vod_pic: it.vod_pic || it.c_pic || it.pic || '',
                    vod_remarks: it.new_continue || it.vod_title || it.vod_continu || it.vod_scroe || ''
                });
            }
            return out;
        }
        var cate = String(MY_CATE || '');
        var pg = Number(MY_PAGE || 1);
        var fl = MY_FL || {};
        var jo, body;
        if (cate === 'hot102') {
            jo = apiPost('/Pc/Category/GetModuleList', { show_id: 102, show_pid: 1, pageSize: 24, page: pg });
        } else if (cate === 'netflix') {
            jo = apiPost('/Pc/Category/GetModuleList', { show_id: 130, show_pid: 1, pageSize: 24, page: pg });
        } else {
            body = {
                area: fl.area || 0,
                year: fl.year || 0,
                sort: fl.sort || 'd_id',
                page: pg,
                pageSize: 24,
                keywords: '',
                tid: Number(cate)
            };
            if (fl.class !== undefined && fl.class !== null && String(fl.class) !== '') body.class = fl.class;
            if (fl.lang !== undefined && fl.lang !== null && String(fl.lang) !== '') body.lang = fl.lang;
            jo = apiPost('/Pc/Search/GetConditionList', body);
        }
        VODS = vods(jo.data && jo.data.list);
    `,
    二级: `js:
        var API_HOSTS = ['https://haiwaiapi.1fc8ab0.com', 'https://hyperf.718fd9f.com'];
        function apiPost(path, body) {
            for (var i = 0; i < API_HOSTS.length; i++) {
                try {
                    var txt = post(API_HOSTS[i] + path, {
                        headers: {
                            'User-Agent': rule.headers['User-Agent'],
                            'Referer': rule.headers.Referer,
                            'Origin': rule.headers.Origin,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body || {})
                    });
                    var jo = JSON.parse(txt);
                    if (jo && jo.data) return jo;
                } catch (e) {}
            }
            return {};
        }
        function txt(v) {
            return v === undefined || v === null ? '' : String(v);
        }
        var src = String(typeof orId !== 'undefined' && orId ? orId : input || MY_URL || '');
        var m = src.match(/(\\d+)/);
        var id = m ? m[1] : src;
        var detail = apiPost('/Pc/Resource/GetVodInfo', { vod_id: id }).data || {};
        var vod = detail.vodInfo || detail.vod || detail || {};
        var plist = apiPost('/Pc/Resource/GetOnePlayList', { vod_id: id, pageSize: 0, page: 1 }).data || {};
        var urls = Array.isArray(plist.urls) ? plist.urls : [];
        if (!urls.length) {
            plist = apiPost('/Pc/Micro/GetOnePlayList', { vod_id: id, pageSize: 0, page: 1 }).data || {};
            urls = Array.isArray(plist.urls) ? plist.urls : [];
        }
        var eps = [];
        for (var i = 0; i < urls.length; i++) {
            var u = urls[i].url || urls[i].play_url || '';
            if (!u) continue;
            eps.push((urls[i].name || urls[i].sort || ('第' + (i + 1) + '集')) + '$' + u);
        }
        if (!eps.length && typeof vod.default_play_url === 'string' && vod.default_play_url) eps.push((vod.default_play_name || vod.vod_title || '播放') + '$' + vod.default_play_url);
        if (!eps.length && typeof vod.play_url === 'string' && vod.play_url) eps.push((vod.default_play_name || vod.vod_title || '播放') + '$' + vod.play_url);
        VOD = {
            vod_id: id,
            vod_name: vod.vod_name || '',
            vod_pic: vod.pic || vod.vod_pic || '',
            type_name: Array.isArray(vod.videoTag) ? vod.videoTag.join('/') : '',
            vod_year: txt(vod.vod_year || vod.vod_filmtime),
            vod_area: txt(vod.vod_area),
            vod_remarks: txt(vod.vod_continu || vod.vod_title || vod.new_continue),
            vod_actor: txt(vod.vod_actor),
            vod_director: txt(vod.vod_director || vod.vod_directed),
            vod_content: txt(vod.vod_use_content || vod.vod_content),
            vod_play_from: eps.length ? 'GZ360' : '',
            vod_play_url: eps.join('#')
        };
    `,
    搜索: `js:
        var API_HOSTS = ['https://haiwaiapi.1fc8ab0.com', 'https://hyperf.718fd9f.com'];
        function apiPost(path, body) {
            for (var i = 0; i < API_HOSTS.length; i++) {
                try {
                    var txt = post(API_HOSTS[i] + path, {
                        headers: {
                            'User-Agent': rule.headers['User-Agent'],
                            'Referer': rule.headers.Referer,
                            'Origin': rule.headers.Origin,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(body || {})
                    });
                    var jo = JSON.parse(txt);
                    if (jo && jo.data) return jo;
                } catch (e) {}
            }
            return {};
        }
        function vods(list) {
            var out = [], seen = {};
            list = Array.isArray(list) ? list : [];
            for (var i = 0; i < list.length; i++) {
                var it = list[i], id = String(it.vod_id || it.id || '');
                var name = it.vod_name || it.c_name || '';
                if (!id || !name || seen[id]) continue;
                seen[id] = 1;
                out.push({
                    vod_id: id,
                    vod_name: name,
                    vod_pic: it.vod_pic || it.c_pic || it.pic || '',
                    vod_remarks: it.new_continue || it.vod_title || it.vod_continu || it.vod_scroe || ''
                });
            }
            return out;
        }
        var wd = String(KEY || '').trim();
        var jo = apiPost('/Pc/Search/GetList', { keywords: wd, page: Number(MY_PAGE || 1), pageSize: 24 });
        var list = [];
        if (jo.data) {
            if (Array.isArray(jo.data.list)) list = jo.data.list;
            if (!list.length && Array.isArray(jo.data.czList)) list = jo.data.czList;
        }
        VODS = vods(list);
    `,
    lazy: `js:
        input = { parse: 0, jx: 0, url: input, header: rule.headers };
    `
}
